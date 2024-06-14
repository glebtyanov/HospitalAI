#!pip install -U git+https://github.com/albumentations-team/albumentations
#!pip install np_utils
import glob
import tensorflow
import keras
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from termcolor import colored

from warnings import filterwarnings
filterwarnings("ignore")

directory = "../data/spine/"

#____________________________________________________________

print(colored("Required libraries were succesfully imported...", color = "green", attrs = ["bold", "dark"]))

train_df = glob.glob(directory + "train/**/*.jpeg")
test_df = glob.glob(directory + "test/**/*.jpeg")
validation_df = glob.glob(directory + "val/**/*.jpeg")

train_dir = directory + "train"
test_dir= directory + "test"
validation_dir = directory + "val"

print(colored("The datasets were succesfully loaded...", color = "green", attrs = ["bold", "dark"]))

train_datagen = ImageDataGenerator(
            rescale = 1/255.,
            horizontal_flip = True,
            vertical_flip = True,
            rotation_range = 0.3,
            zca_whitening = True,
            width_shift_range = 0.25,
            height_shift_range = 0.25,
            channel_shift_range = 0.35,
            shear_range = 0.2,
            zoom_range = 0.4)

val_test_datagen = ImageDataGenerator(rescale = 1./255)

train_set = train_datagen.flow_from_directory(train_dir, class_mode = "binary", batch_size = 16, target_size = (224, 224))
validation_set = val_test_datagen.flow_from_directory(validation_dir, class_mode = "binary", batch_size = 16, target_size = (224, 224))
test_set = val_test_datagen.flow_from_directory(test_dir, class_mode = "binary", batch_size = 16, target_size = (224, 224))

early_stopping_callbacks = tensorflow.keras.callbacks.EarlyStopping(patience = 15,
                                                                    restore_best_weights = True,
                                                                    verbose = 1)

base_model = keras.applications.ResNet50V2(
    weights="imagenet",  
    input_shape=(224, 224, 3),
    include_top=False,
)

base_model.trainable = False

inputs = keras.Input(shape=(224, 224, 3))

scale_layer = keras.layers.Rescaling(scale=1)
x = scale_layer(inputs)

x = base_model(x, training=False)
x = keras.layers.GlobalAveragePooling2D()(x)
x = keras.layers.Dropout(0.2)(x)  
outputs = keras.layers.Dense(1)(x)
model = keras.Model(inputs, outputs)

model.compile(
    optimizer=keras.optimizers.Adam(),
    loss=keras.losses.BinaryCrossentropy(from_logits=True),
    metrics=[keras.metrics.BinaryAccuracy()],
)

print("Fitting the top layer of the model")
model.fit(train_set, epochs=20, validation_data=validation_set)

base_model.trainable = True

model.compile(
    optimizer=keras.optimizers.Adam(1e-5),  # Low learning rate
    loss=keras.losses.BinaryCrossentropy(from_logits=True),
    metrics=[keras.metrics.BinaryAccuracy()],
)

print("Fitting the end-to-end model")
model.fit(train_set, epochs=5, validation_data=validation_set)

model.save("../models/resnet_transfer_scol.keras")