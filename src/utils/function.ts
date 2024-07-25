export const capitalizeText = (text: string) => {
  return text.toLowerCase().replace(/(^|\s)\w/g, (c) => c.toUpperCase());
};

export const validateFullName = (value: string) => {
  if (!value) return "This field must not be empty.";

  const regex = /^[a-zA-Z ]+$/;
  if (!regex.test(value)) {
    return "Invalid full name";
  }

  return "Valid full name";
};

export const validateEmail = (value: string) => {
  if (!value) return "This field must not be empty.";

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(value)) {
    return "Invalid email";
  }

  return "Valid email";
};

export const validatePassword = (password: string) => {
  if (!password) return "This field must not be empty.";

  const regex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/;
  if (!regex.test(password)) {
    return "Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one symbol.";
  }

  return "Valid password";
};

export const validateMobileNumber = (value: string) => {
  if (!value) return "This field must not be empty.";

  const regex = /^\d{10}$/;
  if (!regex.test(value)) {
    return "Invalid mobile number";
  }

  return "Valid mobile number";
};

export const getTruncateDescription = (
  description: string,
  maxLength: number
) => {
  if (description.length <= maxLength) {
    return description;
  }

  const truncated = description.substring(0, maxLength - 3);
  return truncated + "...";
};

export const slugify = (text: string) => {
  return text
    .toLowerCase() // Convert to lowercase
    .trim() // Remove leading and trailing whitespace
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w-]+/g, "") // Remove non-word characters except hyphens
    .replace(/--+/g, "-"); // Replace consecutive hyphens with a single hyphen
};

export const sanitize = (input: string) => {
  const encodedCharacters: any = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "/": "&#x2F;",
  };

  return input.replace(/[&<>"'/]/g, (match) => encodedCharacters[match]);
};
