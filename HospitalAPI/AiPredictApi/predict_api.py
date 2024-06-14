import cv2
from flask import Flask, request, jsonify
import numpy as np
import tensorflow as tf
import os 
from pathlib import Path
import math

dir_path = Path(os.path.dirname(os.path.realpath(__file__)))
dir_path = Path(dir_path.absolute())

# image_path - relative path to testable image 
def predict_by_image(image_path): 
    image_path = str(image_path)
    
    # process image 
    prediction_image = cv2.imread(image_path) 
    prediction_image = cv2.resize(prediction_image, (224, 224)) 
    prediction_image = tf.keras.utils.img_to_array(prediction_image) 
    prediction_image = np.expand_dims(prediction_image, axis=0) 
    prediction_image = prediction_image / 255 

    prediction = model.predict(prediction_image) 

    confidence = prediction[0][0] * 100
    
    return confidence 

app = Flask(__name__)

@app.route('/predict', methods=['GET'])
def predict():
    try:
        image_name = request.args.get('imagePath')
        print('got arg' + image_name)
        confidence = predict_by_image(str(dir_path.parent.absolute()) + '\\uploads\\' + image_name)
        print('confidence' + str(confidence))
        
        if confidence < 50:
            prediction = 'Normal'
            prediction_index = 0
            confidence = (100 - math.floor(confidence))
        else:
            prediction = 'Scoliosis'
            prediction_index = 1
            confidence =  math.floor(confidence)
    
        return jsonify({'prediction': prediction, 'prediction_index' : prediction_index, 'confidence' : confidence})
    
    except Exception as e:
        print(e)
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    model = tf.keras.models.load_model(str(dir_path) + '\\resnet_transfer_scol.keras')
    app.run(debug=True, port=3001)
