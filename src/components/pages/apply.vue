<template>
  <v-content>
    <template>
      <v-parallax height="350" src="/static/building1.jpg">
        <h2 class="text-center display-1">APPLICATION PROCEDURE</h2></v-parallax
      >

      <v-container class="body-2">
        <v-flex xs10 offset-xs1 pt-5 px-5
          ><p>
            International students for Study abroad/Exchange/Internship program
          </p>

          <p>List of documents required</p>
          <ul>
            <li>Application form</li>
            <li>Academic transcripts</li>
            <li>NOC from home institute</li>
            <li>Passport copy</li>
            <li>Photographs</li>
          </ul>
        </v-flex>
        <v-flex xs10 offset-xs1 pt-5 px-5>
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
          ><v-flex
            ><v-btn
              class="ma-5"
              depressed
              outlined
              color="yellow"
              to="/application"
              >Apply now!</v-btn
            ></v-flex
          ></v-container
        >
        <v-container>
          <v-row>
            <v-flex class="text-center">
              <div class="ma-5">
                <v-btn class="ma-5" depressed outlined color="pink"
                  >Application Form</v-btn
                >

                <v-btn class="ma-5" depressed outlined color="orange"
                  >Credits Form</v-btn
                >

                <v-btn class="ma-5" depressed outlined color="red"
                  >Registration Form</v-btn
                >

                <v-btn class="ma-5" depressed outlined color="blue"
                  >Policies and Procedure</v-btn
                >
              </div>
            </v-flex>
          </v-row>
        </v-container>
      </v-container>
    </template>
  </v-content>
</template>

<script>
export default {
  name: "apply",
  methods: {},
  data() {
    return {};
  }
};
</script>
