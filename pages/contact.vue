<script setup lang="ts">
import { ref } from "vue";
const toast = useToast();

// Form fields
const firstName = ref("");
const lastName = ref("");
const company = ref("");
const email = ref("");
const phoneNumber = ref("");
const message = ref("");

// Validation errors
const errors = ref<string[]>([]);

// Function to show success and error toasts
function showSuccessToast(title: string) {
  toast.add({ title: title, color: "success", icon: "uil:check" });
}

function showErrorToast(title: string, description?: string) {
  toast.add({ title: title, description: description, color: "error", icon: "uil:exclamation-circle" });
}

// Form submission handler
async function submitForm() {
  errors.value = [];

  // Validate required fields
  if (!firstName.value) errors.value.push("First name is required.");
  if (!lastName.value) errors.value.push("Last name is required.");
  if (!email.value) errors.value.push("Email is required.");
  if (!message.value) errors.value.push("Message is required.");

  if (errors.value.length > 0) {
    showErrorToast("Please fill in all required fields.", errors.value.join(" "));
    return;
  }

  try {
    // Send POST request
    const { error } = await useFetch("/api/contact", {
      method: "POST",
      body: { message: `Name: ${firstName.value} ${lastName.value}\nCompany: ${company.value}\nEmail: ${email.value}\nPhone: ${phoneNumber.value}\nMessage: ${message.value}` },
    });

    if (error.value) throw new Error("Failed to send message");

    showSuccessToast("Thanks for reaching out!");

    // Reset form fields
    firstName.value = "";
    lastName.value = "";
    company.value = "";
    email.value = "";
    phoneNumber.value = "";
    message.value = "";
  } catch (error) {
    console.log(error);
    showErrorToast("Something went wrong. Please try again later.");
  }
}
</script>

<template>
  <section>
    <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Let's Talk</h2>
        <p class="mt-2 text-lg/8 text-gray-600">Got an idea or a project to discuss?</p>
      </div>

      <form @submit.prevent="submitForm" class="mx-auto mt-16 max-w-xl sm:mt-20">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label for="first-name" class="block text-sm/6 font-semibold text-gray-900">First name*</label>
            <div class="mt-2.5">
              <input v-model="firstName" type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500" placeholder="John">
            </div>
          </div>
          <div>
            <label for="last-name" class="block text-sm/6 font-semibold text-gray-900">Last name*</label>
            <div class="mt-2.5">
              <input v-model="lastName" type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500" placeholder="Doe">
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="company" class="block text-sm/6 font-semibold text-gray-900">Company</label>
            <div class="mt-2.5">
              <input v-model="company" type="text" name="company" id="company" autocomplete="organization" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500" placeholder="My Company">
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="email" class="block text-sm/6 font-semibold text-gray-900">Email*</label>
            <div class="mt-2.5">
              <input v-model="email" type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500" placeholder="your@email.com">
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="phone-number" class="block text-sm/6 font-semibold text-gray-900">Phone number</label>
            <div class="mt-2.5">
              <div class="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-blue-500">
                <input v-model="phoneNumber" type="text" name="phone-number" id="phone-number" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500" placeholder="1234567890">
              </div>
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block text-sm/6 font-semibold text-gray-900">Message*</label>
            <div class="mt-2.5">
              <textarea v-model="message" name="message" id="message" rows="4" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500"></textarea>
            </div>
          </div>
        </div>
        <div class="mt-10">
          <button type="submit" class="block w-full rounded-md bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 px-3.5 py-2.5 text-center font-bold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer">
            Send message
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
