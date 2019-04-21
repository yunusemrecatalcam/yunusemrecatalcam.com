function start_fit(){

	// Define a model for linear regression.
	const model = tf.sequential();
	model.add(tf.layers.dense({units: 1, inputShape: [1]}));

	model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

	// Generate some synthetic data for training.
	const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
	const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

	// Train the model using the data.
	model.fit(xs, ys, {epochs: 100}).then(() => {
	  // Use the model to do inference on a data point the model hasn't seen before:
	  model.predict(tf.tensor2d([5], [1, 1])).print();
	  // Open the browser devtools to see the output
	});

}
const train_x = tf.tensor([[0,1],[1,0],[1,1],[0,0]],[4,2]);
const train_y = tf.tensor([1,1,1,0],[4,1]);

const logic_net = tf.sequential();

logic_net.add(tf.layers.dense({units:2,inputShape:[2],activation:'relu'}));
logic_net.add(tf.layers.dense({units:3,activation:'relu'}));
logic_net.add(tf.layers.dense({units:3,activation:'relu'}));
logic_net.add(tf.layers.dense({units:1,activation:'sigmoid'}));

const optimizer = tf.train.sgd(0.1)
logic_net.compile({optimizer: optimizer, loss: 'meanSquaredError',metrics: ['accuracy']});

window.onload = train();

function train(){
	
	logic_net.fit(train_x,train_y,{epochs:500}).then(() => {
		console.log("fitted");
	
	});
	
}

function predict(){

	var first   = document.getElementById("first").value;
	var second  = document.getElementById("second").value;
	
	//console.log(first);
	const my_input= tf.tensor([first,second],[1,2],dtype='int32');
	my_input.print();
	logic_net.predict(my_input).print();
}