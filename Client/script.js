document.getElementById("registrationForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    age: parseInt(form.age.value),
    course: form.course.value.trim()
  };

  if (!data.name || !data.email || !data.age || !data.course) {
    alert("Please fill all fields correctly.");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    alert(result.message);
    form.reset();
  } catch (err) {
    alert("Error registering student.");
  }
});
