<template>
  <v-container>
  <v-row justify="center">
  <v-col cols="12" sm="8" lg="6">
        <v-card class="elevetion-12" >
        <v-toolbar dark color="primary" class="pl-4" >
        Registration
        </v-toolbar>
        <v-card-text>
          <v-form v-model="valid" ref="form" lazy-validation>
        <v-text-field
              prepend-icon="mdi-account"
              name="email"
              label="Email"
              type="email"
              v-model="email"
              :rules="emailRules">
              
        </v-text-field>
        <v-text-field
              prepend-icon="mdi-lock"
              name="password"
              label="Password"
              type="password"
              v-model="password"
              :rules="passwordRules">
        </v-text-field>
        <v-text-field  
              prepend-icon="mdi-lock" 
              name="confirm-password" 
              label="Confirm Password" 
              type="password" 
              v-model="confirmPassword"
              :rules="confirmPasswordRules" 
            ></v-text-field>

        </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn 
            color="primary" 
            @click="onSubmit" 
            :loading="loading"
	:disabled="!valid || loading"	>
            Create Account
            </v-btn>
        </v-card-actions>
        </v-card>
  </v-col>
  </v-row>
  </v-container>
</template>
<script>
export default {
data() {
  return {
    email: "",
    password: "",
    confirmPassword: "",
    valid: false,
    emailRules: [
      v => !!v || "Введите E-mail",
      v => /.+@.+\..+/.test(v) || "Проверьте правильность написания E-mail"
    ],
    passwordRules: [
      v => !!v || "Введите пароль",
      v => (v && v.length >= 6) || "Пароль должен состоять как минимум из 6 символов"
    ],
    confirmPasswordRules: [
      v => !!v || 'Введи пароль',
      v => v === this.password || 'Неверный пароль'
    ]
  };
},
methods: {
  async onSubmit() {
    if (this.$refs.form.validate()) {
      const user = {
        email: this.email,
        password: this.password
      };
      
      try {
        await this.$store.dispatch('registerUser', user);
        this.$router.push("/");
      } catch (err) {
        console.error("Registration error:", err.message);
        // Можно добавить отображение ошибки пользователю
      }
    }
  }
}
};
</script>
