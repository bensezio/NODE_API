import {
	addNewContact,
	getContact,
	getContactWithID,
	updateContact,
	deleteContact,
} from '../controllers/crmController';

const routes = (app) => {
	app
		.route('/contact')
		.get((req, res, next) => {
			//middleware
			console.log(`Request from: ${req.originalUrl}`);
			console.log(`Request type: ${req.method}`);
			next();
		}, getContact)
		// POST endpoint
		.post(addNewContact);

	app
		.route('/contact/:contactID')
		// GET a specific contact
		.get(getContactWithID)
		// UPDATE a specific contact
		.put(updateContact)
		// DELETE a specific contact
		.delete(deleteContact);
	// Iniitial test message
	// .delete((req, res) => {
	// 	res.send('DELETE request successful!');
	// });
};

export default routes;
