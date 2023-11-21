export const handleFileChange = (e, setForm) => {
  const file = e.target.files[0];

  setForm((prev) => ({
    ...prev,
    logo: file,
  }));
};

export function handleInputChange(e, setFormData) {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
}
