const handleSubmit = async (e) => {
  e.preventDefault();

  const data = {
    name: form.name,
    phone: form.phone,
    type: form.type,
    message: form.message
  };

  try {

    // SEND DATA TO GOOGLE SHEET
    await fetch(
      "https://script.google.com/macros/s/AKfycbyzqLPzO1lLmsclL4KcJ-hJd8ZyYg_QoOFZLeTugOch8XckXvCvvsOg8AHACVX6pca4/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    );

  } catch (error) {
    console.log(error);
  }

  // WHATSAPP MESSAGE
  const text = `New Enquiry:
Name: ${form.name}
Phone: ${form.phone}
Apartment: ${form.type}
Message: ${form.message}`;

  const whatsappURL =
    "https://wa.me/919133633327?text=" + encodeURIComponent(text);

  window.open(whatsappURL, "_blank");

};
