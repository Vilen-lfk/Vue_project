<template>
  <v-dialog v-model="modal" width="400px">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" color="warning">Buy</v-btn>
    </template>

    <v-card class="pa-3">
      <v-row justify="center">
        <v-col cols="12">
          <v-card-title>
            <h1 class="text--primary">Do you want to buy it?</h1>
          </v-card-title>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12">
          <v-card-text>
            <v-text-field
              name="name"
              label="Your name"
              type="text"
              v-model="name"
            />
            <v-text-field
              name="phone"
              label="Your phone"
              type="text"
              v-model="phone"
            />
          </v-card-text>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12">
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="onClose" :disabled="localLoading">Close</v-btn>
            <v-btn
              @click="onSave"
              :disabled="localLoading"
              :loading="localLoading"
              color="success"
            >
              Buy It!
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['ad'],
  data() {
    return {
      modal: false,
      name: '',
      phone: '',
      localLoading: false
    }
  },
  methods: {
    onClose() {
      this.name = ''
      this.phone = ''
      this.modal = false
    },
    onSave() {
  if (this.name.trim() !== '' && this.phone.trim() !== '') {
    this.localLoading = true

    const result = this.$store.dispatch('createOrder', {
      name: this.name,
      phone: this.phone,
      adid: this.ad.id,
      userid: this.ad.userId,
    })

    if (result && typeof result.then === 'function') {
      result
        .then(() => {
          this.name = ''
          this.phone = ''
          this.modal = false
        })
        .catch(err => {
          console.error('Order creation failed:', err)
        })
        .finally(() => {
          this.localLoading = false
        })
    } else {
      console.warn('createOrder did not return a Promise')
      this.localLoading = false
      this.modal = false
    }
  } else {
    alert("Please fill in both name and phone fields.")
  }
}

  }
}
</script>
