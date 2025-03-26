<template>
  <v-container>
  <v-row justify="center">
  <v-col cols="12" xs="12">
    <v-carousel>
      <v-carousel-item 
        v-for="ad in ads"
        :key="ad.id"
        :src="ad.src"
        cover
      >
        <div class="ad-link">
        <v-btn class="error" :to="'/ad/' + ad.id">
          {{ ad.title }}
        </v-btn>
        </div>
          
      </v-carousel-item>
    </v-carousel>
  </v-col>
  </v-row>
  <v-row justify="center">
  <v-col cols="12" xs="12">
  <v-card>
        <v-img
        height="200px"
        ></v-img>
        <v-card-title primary-title>
        <div>
        <h3
        class="headline mb0"
        >Здесь будет заголовок</h3>
        <div>Здесь будет описание</div>
        </div>
        </v-card-title>
        <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text>Open</v-btn>
        <v-btn raised color="primary">
        Buy
        </v-btn>
        </v-card-actions>
        </v-card>
  </v-col>
  </v-row>
  </v-container>
</template>
<style scoped>
	.ad-link {
		position:absolute;
		bottom: 50px;
		left:50%;
		background: rgb(0,0,0,0.5);
		transform: translate(-50%,0);
		padding: 5px 10px;
		border-top-right-radius: 5px;
		border-top-left-radius: 5px;
	}
</style>


<script>
export default {
  data () { 
	return {
		ads:[
			{
				title:"First",
				desc:"First Desc",
				promo: true,
				src: "https://i.pinimg.com/736x/83/7d/3e/837d3e2e09c9bfdcecfe9b3d5a14ec7c.jpg",
				id:"1"
			},
			{
				title:"Second",
				desc:"Second Desc",
				promo: true,
				src: "https://cdn-0.totalmotorcycle.com/wp-content/uploads/2023/07/2024-Ducati-Panigale-V2a-1200x800.jpg",
				id:"2"
			},
			{
				title:"Third",
				desc:"Thitd Desc",
				promo: true,
				src: "https://i.pinimg.com/originals/c4/b9/46/c4b946640b0ad8ac134291cf748970f4.jpg",
				id:"3"
			},
			{
				title:"Fouth",
				desc:"Fouth Desc",
				promo: true,
				src: "https://i.pinimg.com/736x/52/0f/31/520f31c039b768b839b2a72cd8d33160.jpg",
				id:"4"
			}
		]
	} 	
}

}
</script>
