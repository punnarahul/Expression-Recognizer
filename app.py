from flask import Flask, render_template, request  
import keras
import cv2

import numpy as np

model=keras.models.load_model('static/model1')


app=Flask(__name__)


@app.route('/',methods=['GET','POST'])
def shower():
    return render_template('index.html')

@app.route('/picturechecking',methods=['GET','POST'])
def upload_files():
    try:
        uploaded_file = request.files['w']
    except:
        return render_template('index.html',nop='Please drop an Image') 
    if uploaded_file.filename=='':
         return render_template('index.html',nop='Please drop an Image')      
    uploaded_file.save(uploaded_file.filename)
    imgname=uploaded_file.filename
    img=cv2.imread(imgname)
    print('orginal shape :',img.shape)
    img=cv2.resize(img,(48,48))
    print('resizing shape(32,32,3) :',img.shape)
    img=np.array(img)
    img=img/255
    print('/255 operation:',img)
    print(img.shape)
    # img=img.reshape(-1,6912)
    img = img.reshape(-1, 48, 48, 3)
    value=model.predict([img])
    value=np.array(value)
    i=np.argmax(value)
    if i==0:
        return render_template('index.html',img=imgname,happy='happy')   
    elif i==1:
        return render_template('index.html',img=imgname,sad='sad')   
    elif i==2:
        return render_template('index.html',img=imgname,normal='normal')   
    elif i==3:
        return render_template('index.html',img=imgname,surprise='surprise')   
    elif i==4:
        return render_template('index.html',img=imgname,angry='angry')   
    elif i==5:
        return render_template('index.html',img=imgname,disgust='disgust')   
    else:
        return render_template('index.html',img=imgname,fear='fear')     
    
if __name__=='__main__':
    app.run(debug=True)