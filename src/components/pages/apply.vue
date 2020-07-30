<template>
  <v-content>
    <template>
      <v-parallax height="300" src="/static/buildinglow.jpg">
        <h2 class="text-center display-1">APPLICATION DETAILS</h2>
       
              <div
               class="text-center">
               <v-btn
              depressed
              tile
              class=" white--text mt-5"
              color="#c40018"
              to="/application"
              >Apply now!</v-btn
            >
              </div>
            </v-parallax
      >
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

      <v-container class="body-2">


        
      <v-flex>

      <v-container  class="pb-5 body-2">
        <p>Foreign/ NRI students are generally admitted at the beginning of the academic year commencing in July/ August every year.</p>
        <p>Manipal University Jaipur earmarks 15% of the total seats for international students which includes foreign citizens, 
          PIO Card Holders, OCI (Overseas Citizens of India), Non-resident Indians and NRI-sponsored students under the Foreign/ NRI category. 
          The admissions are based on merit and marks/grades obtained in the qualifying examination (equivalent to the Plus-2 examination).</p>
          <p>International students are not required to take the entrance examination conducted by Manipal University for resident Indian students.</p>
          <p>Please write to us at the Office of International Admissions for details.

admissions@jaipur.manipal.edu</p>
      </v-container>
      </v-flex>

        
      <v-flex>

        <v-flex xs10 offset-xs1 pt-5 px-5>
        <h3 class="text-center display-1">Student exchange programs</h3>
      </v-flex>
      <v-container  class="pb-5 body-2">
        <p>Student exchange programs are activities of receiving foreign students for short term visit and semester exchange/study 
          abroad at Manipal University Jaipur (MUJ), and sending MUJ students for the same at Collaborative Institutes (CIs) within 
          frameworks of MoU/Agreement executed by MUJ. At present, MUJ is applying two forms of student exchange as follows:</p>

          <ol>
            <li><b class="headline">Exchange under Summer Schools/Short Duration Programs/ Internships</b>
              <p>An application form in which students apply as per the CIs requirement and only participate in summer schools, 
                short-term visits, relation exchanges, internships and study from 1 week to 6 months without receiving any degree/diploma. 
                Such exchanges are encouraged during the semester breaks. Students from CIs can apply for similar exchanges at MUJ by applying 
                as per MUJ’s application format and undergo summer schools/ short duration programs/internships.</p>
            </li>
            <li><b class="headline">Credit Exchange Program</b>
              <ul>
                <li><b class="subtitle-1">Outgoing students</b>
                  <p>The courses credited elsewhere, in Indian/Foreign University/Institutions/Colleges by students during 
                    their study period at Manipal University Jaipur may be counted towards the credit requirements for the award of degree.
                    Students can earn external credits only from Indian/Foreign Universities/Institutions with which MUJ has a MoU for the above purpose.</p>
                </li>
                <li><b class="subtitle-1">Incoming students</b></li>
                <p>An application form in which students participate in some suitable courses/modules from 1 semester to 2 
                  semesters need to be submitted by the student along with the credit mapping /learning agreement form. 
                  The credit mapping/learning agreement form must also be filled by the students of HIs with agreement and 
                  approval from their Dean/Head of the programme. The approved copy of Credit transfer/mapping form needs to be 
                  verified by the respective HoD and approved by Dean of the Faculty. The credit transfer/mapping form’s copy must be 
                  submitted to CoE, Directorate of Academics and Directorate of International Collaborations.</p>
              </ul>
            </li>
          </ol>

      </v-container>
      </v-flex>


        
      <v-flex>

        <v-flex xs10 offset-xs1 pt-5 px-5>
        <h3 class="text-center display-1">VISA</h3>
      </v-flex>
      <v-container  class="pb-5 body-2">
        <p>All foreign students seeking admission at Manipal University have to come on a student visa which is valid for more than 180 days. Such students 
          will have to register with the Foreigners' Registration Office (FRO) within 14 days of their arrival in India</p>
        <p>People of Indian origin can either come with a PIO Card or an OCI (Overseas Citizen of India). In such a case, they do not require a student visa to study in India. However, a PIO Card Holder will have to register with the FRO.</p>
          
      </v-container>
      </v-flex>
      <v-flex>



        <v-flex xs10 offset-xs1 pt-5 px-5>
        <h3 class="text-center display-1">List of documents required</h3>
      </v-flex>
          <ul>
            <li>Academic transcripts</li>
            <li>NOC from home institute</li>
            <li>Passport copy</li>
            <li>Photographs</li>
          </ul>
          
        <v-container>
          <v-row>
            <v-flex class="text-center">
              <div class="ma-5">

                <v-btn class="ma-5 white--text"
                    rel="noopener noreferrer"
                    target="_blank" depressed tile color="green" href="https://firebasestorage.googleapis.com/v0/b/muj-foreign-relations.appspot.com/o/requiredForms%2FCredit_Transfer_Form.pdf?alt=media&token=e55e1896-85e8-44a2-9741-ed7ea858abb0"
                  >Registration Form</v-btn
                >

                <v-btn class="ma-5 white--text"
                    rel="noopener noreferrer"
                    target="_blank" depressed tile color="orange" href="https://firebasestorage.googleapis.com/v0/b/muj-foreign-relations.appspot.com/o/requiredForms%2FCredit_Transfer_Form.pdf?alt=media&token=e55e1896-85e8-44a2-9741-ed7ea858abb0"
                  >Credits Form</v-btn
                >

                <v-btn class="ma-5 white--text"
                    rel="noopener noreferrer"
                    target="_blank" depressed tile color="blue" href="https://firebasestorage.googleapis.com/v0/b/muj-foreign-relations.appspot.com/o/requiredForms%2FPolicies_Procedures.pdf?alt=media&token=11c4ddc0-3b36-48e6-8954-2a5120ab10b1"
                  >Policies and Procedure</v-btn
                >
              </div>
            </v-flex>
          </v-row>
        </v-container>
          <h3 class="text-center pa-5">Instructions</h3>
          <ul>
            <li>Fill and print online application form</li>
            <li>
              Attach relevant filled credit mapping form, No objection
              certificate from home institute, relevant transcripts, scan
              passport copies of first and last page, colour passport size
              photograph
            </li>
            <li>
              Application Process Fee payment details (INR 1000; USD 15)(RTGS,
              NEFT details of MUJ)
            </li>
            <li>
              Scan and send application along with all required documents at
              doic@jaipur.manipal.edu
            </li>
          </ul>
        </v-flex>
        <v-container class=" mx-auto"
          >
          <v-row>
            <v-flex class="text-center">
              <div class="ma-5">
               <v-btn
              class="ma-5 white--text"
              depressed
              tile
              color="#C40018"
              to="/application"
              >Apply now!</v-btn
            >
              </div>
            </v-flex>
          </v-row>
          </v-container
        >
      </v-container>
    </template>
  </v-content>
</template>

<script>
export default {
  name: "apply",
  methods: {},
  data() {
    return {
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
    ],};
  }
};
</script>
