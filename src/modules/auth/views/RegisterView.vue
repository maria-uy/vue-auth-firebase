<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register new account</h2>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
		<form class="" @submit.prevent="onSubmit">
			<input
				class="input_default"
				type="text"
				placeholder="Name"
				v-model="userForm.name"
				required>
			<input
				class="input_default"
				type="email"
				placeholder="Email"
				v-model="userForm.email"
				required>
			<input
				class="input_default"
				type="password"
				placeholder="Password"
				v-model="userForm.password"
				required>
			<button type="submit" class="btn_form">
				Register
			</button>
		</form>
		<p class="mt-10 text-center text-sm text-gray-800">
			<router-link :to="{ name: 'login' }"> Already have an account?</router-link>
		</p>
    </div>
  </div>
</template>

<script>

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useAuth from '../composables/useAuth'

import Swal from 'sweetalert2'

export default {

    setup() {

        const router = useRouter()
        const { createUser } = useAuth()

        const userForm = ref({
            name: '',
            email: '',
            password: '',
        })


        return {
            userForm,

            onSubmit: async() => {
                const { ok, message } = await createUser( userForm.value )

                if ( !ok ) Swal.fire('Error', message, 'error' )
                else router.push({ name: 'no-entry' })
            }
        }
    }


}
</script>
