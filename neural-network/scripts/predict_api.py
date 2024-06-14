import cv2
from flask import Flask, request, jsonify
import numpy as np
import tensorflow as tf
app = Flask(__name__)
model = tf.keras.models.load_model('../models/resnet_transfer_scol.keras')
@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        input_data = data['input']
        input_data = tf.convert_to_tensor([input_data])
        
        predictions = model.predict(input_data)
        return jsonify({'predictions': predictions})
    except Exception as e:
        return jsonify({'error': str(e)}), 400
if __name__ == '__main__':
    app.run(debug=True)
def predict_by_image(image_path): 
    image_path = str(image_path) 
    prediction_image = cv2.imread(image_path) 
    prediction_image = cv2.resize(prediction_image, (224, 224)) 
    prediction_image = tf.keras.utils.img_to_array(prediction_image) 
    prediction_image = np.expand_dims(prediction_image, axis=0) 
    prediction_image = prediction_image / 255 
    prediction = model.predict(prediction_image) 
    confidence = prediction[0] * 100
    
    return confidence 