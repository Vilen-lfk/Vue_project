<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" lg="6">
        <h1 class="text--secondary mb-3 mt-3">My ads</h1>
        <v-card v-for="ad in ads" :key="ad.id" class="mb-3" max-width="1000">
          <v-row>
            <v-col xs="4">
              <v-img :src="ad.src" height="175px" cover>
              </v-img>
              </v-col>

              <v-col xs="8">
                <h2 class="text--primary">{{ ad.title }}</h2>
                  <p style="height: 85px; overflow: hidden; text-overflow: ellipsis;">{{ ad.desc }}</p>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" variant="text" :to="'/ad/' + ad.id">
                    Open
                    </v-btn>
                  </v-card-actions>
              </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data () { 
	return {
	ads:[
	{
		title:"First",
		desc:"First Desc",
		promo: true,
    src:"https://i.pinimg.com/736x/83/7d/3e/837d3e2e09c9bfdcecfe9b3d5a14ec7c.jpg",
		id:"1"        
	},
	{
		title:"Second",
		desc:"Second Desc",
		promo: true,
		src:"https://cdn-0.totalmotorcycle.com/wp-content/uploads/2023/07/2024-Ducati-Panigale-V2a-1200x800.jpg",
		id:"2"     
	},
	{
		title:"Third",
		desc:"Thitd Desc",
		promo: true,
		src:"https://i.pinimg.com/originals/c4/b9/46/c4b946640b0ad8ac134291cf748970f4.jpg",
		id:"3"
	},
	{
		title:"Fouth",
		desc:"Fouth Desc",
		promo: true,
		src:"https://i.pinimg.com/736x/52/0f/31/520f31c039b768b839b2a72cd8d33160.jpg",
		id:"4"
	}
	]
} 	
}

}
</script>