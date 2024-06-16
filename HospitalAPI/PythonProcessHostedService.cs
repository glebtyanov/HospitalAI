using System.Diagnostics;

namespace HospitalAPI;

public class PythonProcessHostedService : IHostedService, IDisposable
{
    public Task StartAsync(CancellationToken cancellationToken)
    {
        // Install Python dependencies
        var installDependenciesStartInfo = new ProcessStartInfo
        {
            FileName = "pip",
            Arguments = "install -r ./AiPredictApi/requirements.txt",
            UseShellExecute = true,
            CreateNoWindow = true,
        };
        
        var installDependenciesProcess = new Process { StartInfo = installDependenciesStartInfo };
        installDependenciesProcess.Start();
        installDependenciesProcess.WaitForExit();
        
        // Start the Python script
        var startInfo = new ProcessStartInfo
        {
            FileName = "python",
            Arguments = "./AiPredictApi/predict_api.py",
            UseShellExecute = true,
            CreateNoWindow = true
        };
        
        var process = new Process { StartInfo = startInfo };
        process.Start();
        
        return Task.CompletedTask;
    }

    public Task StopAsync(CancellationToken cancellationToken)
    {
        ReleaseUnmanagedResources();
        return Task.CompletedTask;
    }

    private void ReleaseUnmanagedResources()
    {
        // really bad coz it ll stop all python from happening but idk idc
        var processes = Process.GetProcessesByName("python");
        foreach (var process in processes)
        {
            process.Kill();
        }
    }

    public void Dispose()
    {
        ReleaseUnmanagedResources();
        GC.SuppressFinalize(this);
    }

    ~PythonProcessHostedService()
    {
        ReleaseUnmanagedResources();
    }
}