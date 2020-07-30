<template>
  <v-content>
    <template>
      <v-parallax height="300" src="/static/buildinglow.jpg">
        <h1 class="text-center display-1">RAJASTHAN</h1></v-parallax
      >
    </template>
        
<v-container wrap>
  
        <v-expansion-panels tile flat>
    <v-expansion-panel class=" grey lighten-2"
    >
      <v-expansion-panel-header><h2 class=" display-1 pa-3 pink--text text--darken-3">
         EXPLORE
        </h2></v-expansion-panel-header>
      <v-expansion-panel-content>
       
             <section row wrap mb-4 class="grey lighten-2 ma-1">
        
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-baseline>
               <v-flex class="  xs12 md6" 
            v-for="item in explore"
            :key="item.title"
            router
            :href="item.link">
                <v-sheet
          class="transparent pink--text text--darken-4"
          
          outlined
          tile
        >
          
         <h4> {{item.title}}</h4>

          <v-list
          class="transparent">
        <v-list-item
          v-for="items in item.subs"
            :key="items.title"
            router
            :href="items.link"
          link
        >

          <v-list-item-content>
            <v-list-item-title> <v-icon>mdi-arrow-right-bold</v-icon>
              {{ items.subtitle }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

        </v-sheet>
              </v-flex>     

            </v-layout>
          </v-container>
        </v-flex>
      </section>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
    </v-container>
      <v-flex>
        <v-flex xs10 offset-xs1 pt-5 px-5>
        <h3 class="text-center display-1">Land of Maharajas</h3>
      </v-flex>

      <v-container  class="pb-5 body-2">
        <p>The magic of Rajasthan lies in its sand dunes, its vibrancy in its lively folk songs and its history in its forts and palaces. Everywhere you go, brightly colored turbaned men greet you with folded palms in front of the chest – a traditional greeting signifying “Namaste.” Some parts of the state look lost in time, while some capture the glitz and glamor of modern day life with perfection.</p>
        <p>There are several reasons to visit Rajasthan. Camping on the smooth sand dunes under the glittering skies, or wandering among the ruins of a colossal fort, each experience has its own uniqueness. The pleasures of shopping for a traditional “jooti” or digging your teeth into “dal-baati” are as varied as they are fascinating.</p>
        </v-container>
      </v-flex>
    <v-container>
      <section row wrap justify-center mb-4>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-baseline>
              <v-flex xs12 md6  v-for="item in raj"
            :key="item.title">
                <v-card class="elevation-0 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class=" display-1">{{item.title}}</div>
                  </v-card-title>
                  <v-card-text class="detail body-2">
                   <v-card
    class="mx-auto elevation-0 transparent" tile
  >
    <v-img lazy-src
      :src="item.photo"
    ></v-img>
    <v-card-text v-for="items in item.cont"
            :key="items.p">
      {{items.p}}
    </v-card-text>
  </v-card>

                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </section>
    </v-container>
      
      <v-container>
        
     <v-card
            outlined
            tile
    class="mx-auto pa-2 mt-5 elevation-0"
    max-width="800"
  >
    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/MBv6Q07o_7c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  </v-card>
      </v-container>
  </v-content>
</template>

<script>
export default {
  name: "rajasthan",
    data: () => ({
      explore : [
      {title:'MUJ CENTER FOR INTERNATIONAL PROGRAMS', link:'',
      subs:[{subtitle:'About', link:'/about'},
              {subtitle:'Our Team', link:'/team'},
              /* {subtitle:'Contact', link:''} */
      ]},
      {title:'INTERNATIONAL ACADEMIC PROGRAMS', link:'',
      subs:[{subtitle:'Undergraduate Studies', link:'/undergraduate_studies'},
              {subtitle:'Postgraduate Studies', link:'/postgraduate_studies'},
              {subtitle:'PhD', link:'/phd'},
      ]},
      {title:'INTERNATIONAL ADMISSIONS', link:'',
      subs:[{subtitle:'How to Apply', link:'/apply'},
              {subtitle:'Register Online', link:'/application'},
              {subtitle:'Fee (Foreign/NRI)', link:'https://jaipur.manipal.edu/muj/admission/international-students/fees.html'},
              {subtitle:'Eligibility', link:'https://jaipur.manipal.edu/muj/admission/indian-students/who-can-apply.html'},
              {subtitle:'Course fee refund rules', link:'https://jaipur.manipal.edu/muj/admission/international-students/fees-refund.html'},
      ]},
      {title:'STUDY @ MUJ', link:'',
      subs:[{subtitle:'Academics', link:'https://jaipur.manipal.edu/muj/academics.html'},
              {subtitle:'Life @ MUJ', link:'/life_at_muj'},
              {subtitle:'Explore Rajasthan', link:'/rajasthan'}
      ]},
    ],
        raj:[
            {
                title:'Forts and Palaces', photo:'https://toib.b-cdn.net/wp-content/uploads/2017/06/Mehangarh-Fort.jpg',
                cont:[
                    {p:'Rajasthan is home to the maximum number of forts and palaces in India. The colossal forts and majestic palaces scattered around the state are testimonies to its glorious heritage, and shine light on its royal past. That apart, the architectural magnificence of these structures is spellbinding.'},
                    {p:'One could explore the corridors of the hundred feet Mehangarh Fort in Jodhpur, marvel at the fabulous beauty of Amer Fort and visit the City Palace in Jaipur – the largest in the state. One could also admire the intricate details in the “jharokas” of Patwon ki Haveli in Jaisalmer.'}
                ]
            },
            {
                title:'Wildlife', photo:'https://toib.b-cdn.net/wp-content/uploads/2017/06/Ranthambore-National-Park.jpg',
                cont:[
                    {p:'Rajasthan is home to a great number of wildlife in India. Some of the most famous wildlife sanctuaries worth checking out are Desert National Sanctuary, Jaisalmer, Kumbhalgarh Wildlife Sanctuary, where visitors can enjoy foot tracking and horse safaris, and National Chambal Wildlife Sanctuary, Kota.'},
                    {p:'When it comes to national parks, one must visit the Ranthambore National Park, a great place for observing tigers in their natural habitat. Sariska National Park, Alwar, is another park worth visiting due to its significant tiger population. Explore wildlife with this package.'},
                ]
            },
            {
                title:'Exotic Heritage Hotels', photo:'https://toib.b-cdn.net/wp-content/uploads/2017/06/Umaid-Bhawan-Palace-1.jpg',
                cont:[
                    {p:'Rajasthan is home to several heritage hotels that allow one to experience the royal lifestyle first hand, besides getting acquainted with the princely traditions and culture of this state. One such heritage hotels is Rambagh Palace, Jaipur, which is also known as the “Jewel of Jaipur.”'},
                    {p:'Carved of golden-yellow sandstone and dressed in opulence, Taj Umaid Bhawan Palace in Jodhpur delivers a truly exotic experience. No other hotel is as unique and fascinating as the Lake Palace in Udaipur. Some other famous heritage hotels are Fort Rajwada in Jaisalmer, Shiv Niwas Palace in Udaipur and Khimsar Fort, Khimsar.'},
                ]
            },
            {
                title:'Festivals and Dances', photo:'https://toib.b-cdn.net/wp-content/uploads/2017/06/Bikaner-Camel-Festival.jpg',
                cont:[
                    {p:'The number of festivals and fairs held in Rajasthan throughout the year make it one of the top cultural cities in India. These are occasions for merrymaking, and are marked by colorful music and dance performances. Turban tying competitions, camel races, elephant polo and other such lively and incredible performances attract tourists in large numbers.'},
                    {p:'Some of the popular dances of Rajasthan which have gained international recognition are the Ghoomar dance from Udaipur and the Kalbeliya dance from Jaisalmer. Some of the other famous dances are Kathputli, Bhopa, Chang, Teratali etc. The most popular fairs held in the state are Marwar Festival, Pushkar Fair, Bikaner Camel Festival, Bundi Festival and Mewar Fair, among others.'},
                ]
            },
            {
                title:'Cities', photo:'https://toib.b-cdn.net/wp-content/uploads/2017/06/Palaces-of-Udaipur.jpg',
                cont:[
                    {p:'Rajasthan, being the largest state of India, contains a large number of cities which can be best explored using a Rajasthan travel guide. Jaipur, the “Pink City,” and also the capital of Rajasthan, is famous for its forts and palaces, most notably Amer Fort, Hawa Mahal etc.'},
                    {p:'Then there is Udaipur, with its glistening lakes like Lake Pichola, and wonders like Taj Lake Palace, besides being a haven for shoppers. Kota is famous for its Jagmandir Palace, Kota Barrage, Chambal gardens etc, besides its delicious “Kota ki Kachori.” Similarly, Jaisalmer offers a rare experience of camping under the night skies among the sand dunes.'},
                ]
            },
            {
                title:'Desert Safari', photo:'https://toib.b-cdn.net/wp-content/uploads/2017/06/Jaisalmer-desert-festival.jpg',
                cont:[
                    {p:'One of the best places to experience the charms of desert safari is Jaisalmer, which also hosts the Jaisalmer desert festival. Camping under the shining stars with the silence of the desert only broken by the whispering wind – it’s a magical experience! Another way of experiencing the rich and colorful Rajasthani folk culture is participating in the Desert Festival, which is held around January to February every year. Experience desert safari in Jaisalmer with these customized packages.'},
                    
                ]
            },
            {
                title:'Culture', photo:'https://toib.b-cdn.net/wp-content/uploads/2017/06/Summer-Festival-is-celebrated-in-Mount-Abu.jpg',
                cont:[
                    {p:'Undoubtedly, Rajasthan is one of the top cultural  States in India. The people here are adorned in brightly colored costumes called “angarakha” and “Ghaghara”. Cuisine of the state involves foodstuff like buttermilk, “khud khargosh” (rabbit meat), “dal baati churma”, “gatte ki sabzi”, etc.'},
                    {p:'Farming is the main occupation followed by the people of Rajasthan and the most widely grown crops are wheat, bajra, pulses etc. However, just like anywhere else, there is a modern side of Rajasthan too which is reflected in the swanky malls, parks etc.'},
                ]
            },
            {
                title:'Shopping', photo:'https://toib.b-cdn.net/wp-content/uploads/2017/06/Johari-bazar.jpg',
                cont:[
                    {p:'One of the best places for shopping in India is Rajasthan. This is because, shopping here is another way of discovering the cultural side of the city. For ethnic handlooms, handicrafts and artifacts, no city is better than Jaipur. Some of the best places are Johari Bazar and Bapu Bazar. Jodhpur is the best place to head to for items ranging from antiques to accessories. Clock Tower Market and Nai Sarak are the best options.'},
                    {p:'Hathi Pol Bazar, famous for Rajasthani miniature paintings and Bada Bazar in Udaipur display a wide range of exotic items. Another exciting place for shopping is Sadar Bazar in Pushkar, where one can get items like puppets, leatherwear, textiles, and a lot more.'},
                ]
            },
            {
                title:'Lakes', photo:'https://toib.b-cdn.net/wp-content/uploads/2017/06/Jag-Mandir-palace-in-Lake-Pichola.jpg',
                cont:[
                    {p:'There are several beautiful lakes in Rajasthan. While some act as prominent landmarks, others embellish the beauty of the areas around them. Of course, Lake Pichola in Udaipur City, enjoys a popularity like no other. An artificial freshwater lake, it houses two islands, Jag Niwas and Jag Mandir. One can also find the Fateh Sagar Lake here. Then, there is the Nakki Lake in the hill station of Mount Abu, which is considered to be sacred. Another great fascination is the prominent Sambhar Salt Lake, which is India’s largest inland salt lake.'},
                  
                ]
            },
            {
                title:'Cuisine', photo:'https://toib.b-cdn.net/wp-content/uploads/2017/06/rajasthani-cuisine.jpg',
                cont:[
                    {p:'The typical geographical and climatic conditions prevailing in Rajasthan have shaped the nature of their cuisine too. The scarcity of water, combined with the dry climate, has given rise to unique cooking styles. The use of dairy products is rather extensive, while beans, dried lentils and legumes like jowar, bajra and gram flour are the essential ingredients. Ghee is used generously in all the dishes. Apart from vegetarian dishes, lip-smacking non-vegetarian dishes are also a favorite here. These include “laal maas”, jungle maas, safed maas and khargosh.'},
                   
                ]
            }
        ]
    }),
  }
</script>

