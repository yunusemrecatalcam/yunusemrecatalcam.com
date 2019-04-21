import tensorflow as tf
import numpy as np
#from keras import Sequential
import keras

train_x = np.array([[0,1],[1,0],[1,1],[0,0]]);
train_y = np.array([1,1,1,0]);

model = keras.models.Sequential()
model.add(keras.layers.Dense(2,input_shape=[2],activation='relu'))
model.add(keras.layers.Dense(3,activation='relu'))
model.add(keras.layers.Dense(3,activation='relu'))
model.add(keras.layers.Dense(1,activation='sigmoid'))

opt = keras.optimizers.SGD(lr=0.1)
model.compile(optimizer=opt, loss='mean_squared_error',metrics=['accuracy'])

model.fit(train_x,train_y,epochs=500)

print(train_x.shape)
pred   = np.array([[1,0]]).reshape(1,2)
result = model.predict(train_x)

print(result)