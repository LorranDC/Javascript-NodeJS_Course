const mongoose = require('mongoose');
const validator = require('validator');

const ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    phone: { type: String, required: false, default: '' },
    createdOn: { type: Date, default: Date.now }   
});

const ContactModel = mongoose.model('Contact', ContactSchema);

function Contact(body) {
    this.body = body;
    this.errors = [];
    this.contact = null;
}

Contact.prototype.register = async function() {
    this.validades();
    if(this.errors.length > 0) return;
    this.contact = await ContactModel.create(this.body);
};

Contact.prototype.validates= function() {
    this.cleanUp();

    if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('Email inválido');
    if(!this.body.name) this.errors.push('Nome é um campo obrigatório.');
    if(!this.body.email && !this.body.phone)  {
        this.errors.push('Pelo menos um contato precisa ser enviado: email ou telefone.');
    }
};

Contact.prototype.cleanUp = function() {
    for(const key in this.body) {
        if(typeof this.body[key] !== 'string') {
            this.body[key] = '';
        }
    }

    this.body = {
        name: this.body.name,
        lastName: this.body.last-name,
        email: this.body.email,
        phone: this.body.phone,
    };
};

Contact.prototype.edit = async function(id) {
    if(typeof id !== 'string') return;
    this.validates();
    if(this.errors.length > 0) return;
    this.contact = await ContactModel.findByIdAndUpdate(id, this.body,{new: true});
};

// Método estáticos
Contact.findById = async function(id) {
    if(typeof id !== 'string') return;

    const contact = await ContactModel.findById(id);
    return contact;
}

Contact.findContacts = async function() {

    const contacts = await ContactModel.find()
    .sort({ createdOn: -1 });
    return contacts;
}

Contact.delete = async function(id) {
    if(typeof id !== 'string') return;
    const contact = await ContactModel.findOneAndDelete({_id: id});
    return contact;
}



module.exports = Contact;