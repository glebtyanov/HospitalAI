import cv2 
import numpy as np 
import tensorflow
import keras 
import glob
import math
# image_path - relative path to testable image 
def predict_by_image(image_path): 
    image_path = str(image_path) 

    # process image 
    prediction_image = cv2.imread(image_path) 
    prediction_image = cv2.resize(prediction_image, (224, 224)) 
    prediction_image = tensorflow.keras.utils.img_to_array(prediction_image) 
    prediction_image = np.expand_dims(prediction_image, axis=0) 
    prediction_image = prediction_image / 255 

    prediction = model.predict(prediction_image) 
    print(prediction)
    confidence = prediction[0][0] * 100
    print(confidence)
    return confidence 
 
if __name__ == "__main__": 
    normals = glob.glob("../data/spine/test/Normal/*")
    scols = glob.glob("../data/spine/test/Scol/*")
    model = keras.models.load_model("../models/resnet_transfer_scol.keras") 
    # parser = argparse.ArgumentParser("predict") 
    # parser.add_argument("path", help="Relative path to     img.") 
    # path = parser.parse_args().path 
    
    for normal in normals:
        confidence = predict_by_image(normal)
        if (confidence > 50):
            print(confidence) 
            print("ERROR: WAS NORMAL BUT REPORTED SCOLIOSIS")
        else:
            print('normal with' + str((100 - math.floor(confidence))) + '% confidence')
 
    for scol in scols:
        confidence = predict_by_image(scol)
        if (confidence < 50):
            print(confidence) 
            print("ERROR: WAS NORMAL BUT REPORTED SCOLIOSIS")
        else:
            print('scol with' + str(math.floor(confidence)) + '% confidence')
 