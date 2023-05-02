

function ContactForm() {


  return (
    <form className="formContact">
 
   
    
      <label>
        Nom:
        <input
          type="text"
          
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
        
        />
      </label>
      <br />
      <label>
        Message:
        <textarea
        
        />
      </label>
      <br />
      <button type="submit">Envoyer</button>
     
    </form>
  );
}

export default ContactForm;
