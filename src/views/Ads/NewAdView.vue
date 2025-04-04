<template>
  <v-container>
    <v-row>
      <v-col cols="8" offset="2">
        <h1 class="text--secondary mb-3 mt-3">Create Ad</h1>
        <v-form v-model="valid" ref="form" validation>
          <v-text-field
          name="title"
          label="Ad Title"
          type="text"
          v-model="title"
          :rules="[(v) => !!v || 'Title is required']"
          >
          </v-text-field>
          <v-textarea
          name="description"
          label="Ad Description"
          type="text"
          v-model="description"
          :rules="[(v) => !!v || 'Description is required']"
          class="mb-3"
          ></v-textarea>
        </v-form>
        <v-row>
          <v-col cols="8">

          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-btn class="mt-3" color="red">
            Upload
              <v-icon right dark>mdi-cloud- upload</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
          <img
          src="https://i.pinimg.com/736x/83/7d/3e/837d3e2e09c9bfdcecfe9b3d5a14ec7c.jpg"
          height="150"
          class="mt-3"
          />
          </v-col>
        </v-row>
        <v-row>
        <v-col cols="8">
          <v-switch v-model="promo" label="Ad to
              Promo?"></v-switch>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
          <v-spacer></v-spacer>
            <v-btn
            color="success"
            @click="createAd"
            :loading="loading"
            :disabled:="!valid || loading"
            >Create Ad
            </v-btn>
          </v-col>
        </v-row>


      </v-col>
    </v-row>
  </v-container>
  </template>
<script>


export default {
  data () {
    return {
      
        title: "...",
        desc:"...",
        promo: true,
        src: "...",
        id:""
        }

    }
  }

</script>