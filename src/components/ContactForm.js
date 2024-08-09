/** @format */

import { Button, FormLabel, Input, Textarea, useToast } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const maxCharacterLimit = 500;

  const form = useRef();

  const toast = useToast();

  const handleForm = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9wok5r4", "template_h2w35gk", form.current, {
        publicKey: "4QaeMz-v7ypIIbjMn",
      })
      .then(
        () => {
          toast({
            status: "success",
            description: "Sent Successfully!",
            duration: 5000,
            isClosable: true,
          });
        },
        (error) => {
          toast({
            status: "error",
            description: error,
            duration: 5000,
            isClosable: true,
          });
        }
      );
  };

  return (
    <form ref={form}>
      <FormLabel fontSize={"1rem"}>Name:</FormLabel>
      <Input
        type='text'
        value={name}
        onChange={handleName}
        name='client_name'
        required
      />
      <FormLabel fontSize={"1rem"}>Email:</FormLabel>
      <Input
        type='email'
        value={email}
        onChange={handleEmail}
        name='client_email'
        required
      />
      <FormLabel fontSize={"1rem"}>Description:</FormLabel>
      <Textarea
        type='text'
        value={description}
        onChange={handleDescription}
        height={"10rem"}
        maxLength={maxCharacterLimit}
        name='description'
        required
      />
      <Button mt={4} colorScheme='teal' type='submit' onClick={handleForm}>
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
