"use strict";
const createDiv = (className) => {
  const divInput = document.createElement("div");
  divInput.className = className;
  return divInput;
};
const createSpan = (txt) => {
  const span = document.createElement("span");
  span.textContent = txt;
  return span;
};
const createInput = ({ className, type, name, placeholder, id, value }) => {
  const inputElem = document.createElement("input");
  if (className) {
    inputElem.className = className;
  }
  if (type) {
    inputElem.type = type;
  }
  if (name) {
    inputElem.name = name;
  }
  if (placeholder) {
    inputElem.placeholder = placeholder;
  }
  if (id) {
    inputElem.id = id;
  }
  if (value !== undefined) {
    inputElem.value = value;
  }

  return inputElem;
};

const createLabel = ({ className, htmlFor, spanText, labelText }) => {
  const label = document.createElement("label");
  if (className) {
    label.className = className;
  }
  if (htmlFor) {
    label.htmlFor = htmlFor;
  }
  if (labelText) {
    label.append(labelText);
  }
  if (spanText) {
    label.append(createSpan(spanText));
  }

  return label;
};
const mainContainer = document.querySelector(".container");
const formLoad = () => {
  const h1 = document.createElement("h1");
  h1.textContent = "CREATE AN ACCOUNT";
  const h2 = document.createElement("h2");
  h2.textContent = "We always keep your name and email address private";
  const form = document.createElement("form");
  const inputDiv1 = createDiv("inputs");
  inputDiv1.append(
    createInput({ type: "text", placeholder: "First name" }),
    createInput({ type: "text", placeholder: "Last name" }),
    createInput({ type: "text", placeholder: "Display name" }),
    createInput({ type: "email", placeholder: "Email address" }),
    createInput({ type: "password", placeholder: "Password" }),
    createInput({ type: "password", placeholder: "Password conformation" }),
  );

  const inputDiv2 = createDiv("label-input");

  inputDiv2.append(
    createInput({ type: "radio", id: "buyer", name: "buyer-seller" }),
    createLabel({
      className: "label",
      htmlFor: "buyer",
      labelText: `Join as a buyer`,
      spanText: `I am looking for a Name,Logo or Tagline for my business,brand or
              product.`,
    }),
  );
  const inputDiv3 = createDiv("label-input");
  inputDiv3.append(
    createInput({ type: "radio", id: "seller", name: "buyer-seller" }),
    createLabel({
      className: "label",
      htmlFor: "seller",
      labelText: `Join as a creative or marketplace Seller`,
      spanText: `I am planing to submit name ideas,logo designs or sell name in
              domain marketplace.`,
    }),
  );
  const inputDiv4 = createDiv("label-input checkbox");
  inputDiv4.append(
    createInput({ type: "checkbox", id: "allow", name: "allow" }),
    createLabel({
      className: "label",
      htmlFor: "allow",
      spanText: `Alow Squadhelp to send marketing/promotional offers from time to
            time`,
    }),
  );
  mainContainer.append(h1, h2, form);
  form.append(
    inputDiv1,
    inputDiv2,
    inputDiv3,
    inputDiv4,
    createInput({ type: "submit", value: "Create account" }),
  );
};
formLoad();
