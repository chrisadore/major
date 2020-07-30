<template>
  <v-content>
      <v-parallax height="300" src="/static/buildinglow.jpg">
        <h1 class="text-center display-1">PhD</h1></v-parallax>

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

        <v-container>
            
    <v-expansion-panels focusable>
      <v-expansion-panel v-for="item in options"
            :key="item.title">
        <v-expansion-panel-header>
         <p>
            <v-icon class="mr-3" color="primary">{{item.icon}}</v-icon> {{item.title}}   </p> 
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-list  two-line 
          class="transparent">
        <v-list-item
          v-for="items in item.programs"
            :key="items.name"
            router
            :href="items.link"
                    rel="noopener noreferrer"
                    target="_blank"
          link
        >

          
          <v-list-item-content>
               ►   {{ items.name }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
     <v-card
            outlined
    class="mx-auto pa-2 mt-5 elevation-0"
    max-width="800"
  >
    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/HukpI8gYN70" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  </v-card>
        </v-container>

  </v-content>
</template>

<script>
export default {
  name: "phd",
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
        options:[
            {title:'Architecture and Design', icon:'mdi-ruler-square',
                programs:[
                    {name:'PhD - Design', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/fod/programs/program-list/phd-design.html'}
                ]},

            {title:'Arts and Humanities', icon:'mdi-chart-scatter-plot-hexbin',
                programs:[                    
                    {name:'PhD - Arts and Humanities', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/foa/programs/program-list/phd-arts-and-humanities.html'}
                ]},

            {title:'Basic Sciences', icon:'mdi-atom',
                programs:[
                    {name:'PhD - Science', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/fos/programs/program-list/phd-science.html'}
                ]},

            {title:'Engineering', icon:'mdi-screw-machine-flat-top',
                programs:[
                    {name:'PhD - Engineering', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/foe/programs/program-list/phd-computer-science.html'}
                ]},
            {title:'Management', icon:'mdi-graph',
                programs:[
                    {name:'PHD in Management, Commerce & Buss. Admin', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/fom/programs/program-list/phd-management.html'}
                ]},

        ]
    }),
  }
</script>

