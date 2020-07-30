<template>
  <v-content>
      <v-parallax height="300" src="/static/buildinglow.jpg">
        <h2 class="text-center  display-1">
          APPLICATION
        </h2></v-parallax>
    <v-snackbar v-model="snackbar">
      {{ snackbarText }}
      <v-btn color="pink" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
    <v-container >
      <v-layout row>
        <v-flex xs12>
          <p class="overline warn">EVERY FIELD IS REQUIRED</p>
          <form @submit.prevent="onCreateNode">
            <v-stepper v-model="e6" vertical>
              <v-stepper-step :complete="e6 > 1" step="1"  @click="e6=1"> 
                Start Applicaton Process
              </v-stepper-step>
              <v-stepper-content step="1">
                <v-card class="elevation-0 mt-2">
                    <v-text-field
                      outlined
                      name="name"
                      label="Full Name"
                      id="name"
                      v-model="name"
                      required
                    
                    >
                    </v-text-field>

                    <v-autocomplete
                      outlined
                      class="my-2"
                      :items="program"
                      name="programme"
                      label="Name of programme"
                      id="programme"
                      v-model="programme"
                      required
                      
                    ></v-autocomplete>

                    <v-text-field
                      outlined
                      name="passportno"
                      label="Passport Number"
                      id="passportno"
                      v-model="passportno"
                      required
                    >
                    </v-text-field>

                    <v-autocomplete
                      outlined
                      class="my-2"
                      :items="countrycode"
                      name="studentcode"
                      label="Country Code"
                      id="studentcode"
                      v-model="studentcode"
                      required
                      
                    ></v-autocomplete>

                    <v-text-field
                      outlined
                      name="mobileno"
                      label="Mobile Number"
                      id="mobileno"
                      v-model="mobileno"
                      required
                    >
                    </v-text-field>

                    <!-- <v-layout>
                      <v-row justify="space-around" class="mb-5">
                        <v-date-picker
                          width="350px"
                          v-model="DoB"
                          color="blue lighten-1"                          
      :landscape="$vuetify.breakpoint.smAndUp"
                        ></v-date-picker>
                      </v-row>
                    </v-layout> -->

                      <v-dialog
                      ref="dialog"
                      v-model="modal"
                      :return-value.sync="DoB"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                        outlined
                          v-model="DoB"
                          label="Date of Birth"
                          readonly
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="DoB" scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="$refs.dialog.save(DoB)">OK</v-btn>
                      </v-date-picker>
                    </v-dialog>

                    <v-text-field
                      outlined
                      name="age"
                      label="Age"
                      id="age"
                      v-model="age"
                      required
                    >
                    </v-text-field>


                    <v-autocomplete
                      outlined
                      class="my-2"
                      :items="countrydrop"
                      name="placeofbirth"
                      label="Place of Birth"
                      id="placeofbirth"
                      v-model="placeofbirth"
                      required
                    ></v-autocomplete>

                    <v-comboboc
                      outlined
                      class="my-2"
                      :items="dropdown1"
                      name="gender"
                      label="Gender (Specify if not on the list)"
                      id="gender"
                      v-model="gender"
                      required
                    ></v-comboboc>

                    <v-autocomplete
                      outlined
                      class="my-2"
                      :items="dropdown2"
                      name="maritalstatus"
                      label="Marital Status"
                      id="maritalstatus"
                      v-model="maritalstatus"
                      required
                    ></v-autocomplete>


                    <v-combobox
                    :items="religions"
                    name="religion"
                      label="Religion (Speicify if not listed)"
                      id="religion"
                      v-model="religion"
                    outlined
                  ></v-combobox>

                    <v-text-field
                      outlined
                      name="email"
                      label="Email"
                      id="email"
                      v-model="email"
                      required
                    >
                    </v-text-field>


                    <v-text-field
                      outlined
                      name="nextOfKin"
                      label="Next Of Kin"
                      id="nextOfKin"
                      v-model="nextOfKin"
                      required
                    >
                    </v-text-field>

                    <v-autocomplete
                      outlined
                      class="my-2"
                      :items="countrycode"
                      name="kincode"
                      label="Country Code"
                      id="kincode"
                      v-model="kincode"
                      required
                      
                    ></v-autocomplete>

                    <v-text-field
                      outlined
                      name="contactNextOfKin"
                      label="Contact of Next Of Kin"
                      id="contactNextOfKin"
                      v-model="contactNextOfKin"
                      required
                    >
                    </v-text-field>

                    <v-textarea
                      outlined
                      name="currentAddress"
                      label="Current Address"
                      id="currentAddress"
                      v-model="currentAddress"
                      required
                    >
                    </v-textarea>
                    
                    <v-autocomplete
                    
                      class="my-2"
                      :items="countrydrop"
                      outlined
                      name="country"
                      label="Country"
                      id="country"
                      v-model="country"
                      required
                    >
                    </v-autocomplete>


                    <v-text-field
                      outlined
                      name="state"
                      label="State"
                      id="state"
                      v-model="state"
                      required
                    >
                    </v-text-field>


                    <v-text-field
                      outlined
                      name="postalCode"
                      label="Postal Code"
                      id="postalCode"
                      v-model="postalCode"
                      required
                    >
                    </v-text-field>
                </v-card>
                <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
              </v-stepper-content>

              <v-stepper-step :complete="e6 > 2" step="2"  @click="e6=2"
                >Education at Home University</v-stepper-step
              >

              <v-stepper-content step="2">
                <v-card class="elevation-0"
                  >
                    <v-text-field
                      outlined
                      name="uniName"
                      label="Current University Name"
                      id="uniName"
                      v-model="uniName"
                      required
                    >
                    </v-text-field>

                    <v-text-field
                      outlined
                      name="uniWebsite"
                      label="Current University Website Link"
                      id="uniWebsite"
                      v-model="uniWebsite"
                      required
                    >
                    </v-text-field>
                    
                    <v-autocomplete
                      outlined
                      class="my-2"
                      :items="countrycode"
                      name="unicode"
                      label="Country Code"
                      id="unicode"
                      v-model="unicode"
                      required
                      
                    ></v-autocomplete>

                    <v-text-field
                      outlined
                      name="uniContact"
                      label="University Contact Number"
                      id="uniContact"
                      v-model="uniContact"
                      required
                    >
                    </v-text-field>

                    <v-text-field
                      outlined
                      name="uniFax"
                      label="University Fax Number"
                      id="uniFax"
                      v-model="uniFax"
                      required
                    >
                    </v-text-field>

                    <v-text-field
                      outlined
                      name="uniEmail"
                      label="University Email Number"
                      id="uniEmail"
                      v-model="uniEmail"
                      required
                    >
                    </v-text-field>

                    <v-text-field
                      outlined
                      name="faculty"
                      label="Faculty"
                      id="faculty"
                      v-model="faculty"
                      required
                    >
                    </v-text-field>

                    <v-text-field
                      outlined
                      name="programOfStudy"
                      label="Program Of Study"
                      id="programOfStudy"
                      v-model="programOfStudy"
                      required
                    >
                    </v-text-field>

                    <v-autocomplete
                      outlined
                      class="my-2"
                      :items="dropdown3"
                      name="degree"
                      label="Degree"
                      id="degree"
                      v-model="degree"
                      required
                    ></v-autocomplete>

                    <v-text-field
                      outlined
                      name="semester"
                      label="Semester"
                      id="semester"
                      v-model="semester"
                      required
                    >
                    </v-text-field>

                    <v-text-field
                      outlined
                      name="cgpa"
                      label="CGPA"
                      id="cgpa"
                      v-model="cgpa"
                      required
                    >
                    </v-text-field>

                    <v-text-field
                      outlined
                      name="yearOfGraduation"
                      label="Year Of Graduation"
                      id="yearOfGraduation"
                      v-model="yearOfGraduation"
                      required
                    >
                    </v-text-field>

                    <v-textarea
                      outlined
                      name="achievement"
                      label="Academic Achievements"
                      id="achievement"
                      v-model="achievement"
                      required
                    >
                    </v-textarea>
                </v-card>
                <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
                <v-btn text @click="e6 = 1">Back</v-btn>
              </v-stepper-content>

              <v-stepper-step :complete="e6 > 3" step="3"  @click="e6=3"
                >Others</v-stepper-step
              >

              <v-stepper-content step="3">
                <v-card class="mt-2 elevation-0">
                  <v-textarea
                    outlined
                    name="coCurricular"
                    label="Co-curricular Activities"
                    id="coCurricular"
                    v-model="coCurricular"
                    required
                  >
                  </v-textarea>

                  <v-textarea
                    outlined
                    name="skills"
                    label="Special Skills"
                    id="skills"
                    v-model="skills"
                    required
                  >
                  </v-textarea>
                </v-card>
                <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
                <v-btn text @click="e6 = 2">Back</v-btn>
              </v-stepper-content>

              <v-stepper-step :complete="e6 > 4" step="4"  @click="e6=4"
                >Study In MUJ</v-stepper-step
              >
              <v-stepper-content step="4">
                <v-card class="mt-2 elevation-0">
                  <v-text-field
                    outlined
                    name="schoolMUJ"
                    label="Faculty/ School applied in MUJ"
                    id="schoolMUJ"
                    v-model="schoolMUJ"
                    required
                  >
                  </v-text-field>

                  <v-autocomplete
                    outlined
                    class="my-2"
                    :items="dropdown4"
                    name="mouStatus"
                    label="Does Your University Have MOU with MUJ"
                    id="mouStatus"
                    v-model="mouStatus"
                    required
                  ></v-autocomplete>

                  <v-combobox
                    :items="dropdown5"
                    name="mobilityProg"
                    label="Type of Mobility Program (Specify if others)"
                    id="mobilityProg"
                    v-model="mobilityProg"
                    outlined
                  ></v-combobox>

                  <v-textarea
                    outlined
                    name="research"
                    label="Describe your Research Project (if relevant)"
                    id="research"
                    v-model="research"
                  >
                  </v-textarea>

                  <v-text-field
                    outlined
                    name="supervisor"
                    label="Proposed Site Supervisor"
                    id="supervisor"
                    v-model="supervisor"
                  >
                  </v-text-field>

                  <v-textarea
                    outlined
                    name="equipmentsReq"
                    label="List of Equipment Required"
                    id="equipmentsReq"
                    v-model="equipmentsReq"
                  >
                  </v-textarea>

                  <v-autocomplete
                    outlined
                    class="my-2"
                    :items="dropdown4"
                    name="credit"
                    label="Transfer of credits required(please fill Academic Transcript Form)"
                    id="credit"
                    v-model="credit"
                    required
                  ></v-autocomplete>

                  <v-textarea
                    outlined
                    name="coursesTaken"
                    label="Please Specify Each Course To Be Taken in MUJ"
                    id="coursesTaken"
                    v-model="coursesTaken"
                  >
                  </v-textarea>
                </v-card>
                <v-btn color="primary" @click="e6 = 5">Continue</v-btn>
                <v-btn text @click="e6 = 3">Back</v-btn>
              </v-stepper-content>

              <v-stepper-step :complete="e6 > 5" step="5"  @click="e6=5"
                >Financial Information</v-stepper-step
              >
              <v-stepper-content step="5">
                <v-card class="mt-2 elevation-0">
                  <v-autocomplete
                    outlined
                    class="my-2"
                    :items="dropdown6"
                    name="financialInfo"
                    label="Where will the money come from?"
                    id="financialInfo"
                    v-model="financialInfo"
                    required
                  ></v-autocomplete>

                  <v-textarea
                    outlined
                    name="sponsor"
                    label="Specify Details of Sponsorships (Body/ Institution/ Association)"
                    id="sponsor"
                    v-model="sponsor"
                  >
                  </v-textarea>
                </v-card>
                <v-btn color="primary" @click="e6 = 6">Continue</v-btn>
                <v-btn text @click="e6 = 4">Back</v-btn>
              </v-stepper-content>

              <v-stepper-step :complete="e6 > 6" step="6"  @click="e6=6"
                >Language Proficiency</v-stepper-step
              >
              <v-stepper-content step="6">
                <v-card class="mt-2 elevation-0">
                  

                  <v-combobox 
                    class="my-2"
                    :items="languageslist"
                    outlined
                    name="nativeLang"
                    label="Native Language (Specify if other)"
                    id="nativeLang"
                    v-model="nativeLang">
                  </v-combobox>

                  <v-autocomplete
                    outlined
                    class="my-2"
                    :items="dropdown7"
                    name="englishPro"
                    label="English"
                    id="englishPro"
                    v-model="englishPro"
                    required
                  ></v-autocomplete>

                  <v-autocomplete
                    outlined
                    class="my-2"
                    :items="dropdown7"
                    name="hindiPro"
                    label="Hindi"
                    id="hindiPro"
                    v-model="hindiPro"
                    required
                  ></v-autocomplete>

                  <v-combobox 
                    class="my-2"
                    :items="languageslist"
                    outlined
                    name="otherLangName"
                    label="Other Language (Specify if other)"
                    id="otherLangName"
                    v-model="otherLangName">

                  </v-combobox>

                  <v-autocomplete
                    outlined
                    class="my-2"
                    :items="dropdown8"
                    name="otherPro"
                    label="Other Language"
                    id="otherPro"
                    v-model="otherPro"
                    required
                  ></v-autocomplete>
                </v-card>
                <v-btn color="primary" @click="e6 = 7">Continue</v-btn>
                <v-btn text @click="e6 = 5">Back</v-btn>
              </v-stepper-content>

              <v-stepper-step :complete="e6  > 7" step="7"  @click="e6=7"
                >Inter-Office Communication</v-stepper-step
              >
              <v-stepper-content step="7">
                <v-card class="mt-2 elevation-0">
                  <v-text-field
                    outlined
                    name="interOfficeOfficial"
                    label="Official Name (Dr., Mr., Mrs., Miss.)"
                    id="interOfficeOfficial"
                    v-model="interOfficeOfficial"
                  >
                  </v-text-field>

                  <v-text-field
                    outlined
                    name="poition"
                    label="Position"
                    id="poition"
                    v-model="poition"
                  >
                  </v-text-field>

                  <v-text-field
                    outlined
                    name="dept"
                    label="Office/ Department"
                    id="dept"
                    v-model="dept"
                  >
                  </v-text-field>

                  <v-textarea
                    outlined
                    name="correspondenceAdd"
                    label="Correspondence Address"
                    id="correspondenceAdd"
                    v-model="correspondenceAdd"
                    required
                  >
                  </v-textarea>
                  
                    <v-autocomplete
                      outlined
                      class="my-2"
                      :items="countrycode"
                      name="corCode"
                      label="Country Code"
                      id="corCode"
                      v-model="corCode"
                      required
                    ></v-autocomplete>

                  <v-text-field
                    outlined
                    name="corContact"
                    label="Contact Number"
                    id="corContact"
                    v-model="corContact"
                    required
                  >
                  </v-text-field>

                  <v-text-field
                    outlined
                    name="corFax"
                    label="Fax Number"
                    id="corFax"
                    v-model="corFax"
                    required
                  >
                  </v-text-field>

                  <v-text-field
                    outlined
                    name="corEmail"
                    label="Email"
                    id="corEmail"
                    v-model="corEmail"
                    required
                  >
                  </v-text-field>
                </v-card>
                <v-btn color="primary" @click="e6 = 8">Continue</v-btn>
                <v-btn text @click="e6 = 6">Back</v-btn>
              </v-stepper-content>

              <v-stepper-step step="8" @click="e6=8"
                >Documents <small>upload documents before submitting the application form</small></v-stepper-step
              >
              <v-stepper-content step="8">
                <v-card class="elevation-0 mb-4">
                  <p>Forms available at 
                      <a href="/apply">here</a>
                      under 'List of documents required' section
                     </p>
                  <v-file-input
                    accept="image/*"
                    label="Upload You Photo"
                    ref="fileInput"
                    v-model="photo" 
                  >
                  </v-file-input>
                  <v-btn
                    color="blue darken-2"
                    class="white--text"
                    @click="uploadPhoto"
                    :loading="loading"
                    :disabled="loading"
                    >Upload
                    <v-icon right>mdi-cloud-upload</v-icon>
                  </v-btn>
                  <v-card-actions v-if="imageURL != ''">
                    <img
                      :src="imageURL"
                      alt=""
                      style="height: 100px; width: auto;"
                    />
                  </v-card-actions>

                  <v-file-input
                    accept=".pdf"
                    label="Upload Credit Mapping Form"
                    ref="fileInput"
                    v-model="CreditForm"
                  >
                  </v-file-input>
                  <v-btn
                    color="blue darken-2"
                    class="white--text"
                    @click="uploadCreditForm"
                    :loading="loading"
                    :disabled="loading"
                    >Upload
                    <v-icon right>mdi-cloud-upload</v-icon>
                  </v-btn>
                  <v-card-actions v-if="creditFormstat != ''" >
                    <p>pdf uploaded successfully</p>
                  </v-card-actions>

                  <v-file-input
                    accept=".pdf"
                    label="Upload NOC Form"
                    ref="fileInput"
                    v-model="NOCForm"
                  >
                  </v-file-input>
                  <v-btn
                    color="blue darken-2"
                    class="white--text"
                    @click="uploadNOCForm"
                    :loading="loading"
                    :disabled="loading"
                    >Upload
                    <v-icon right>mdi-cloud-upload</v-icon>
                  </v-btn>
                  <v-card-actions v-if="NOCstat != ''">
                    <p>pdf uploaded successfully</p>
                  </v-card-actions>
                </v-card>
                  
                <v-flex class="ma-5 pa-5">
                  <v-btn
                  class="primary"
                  :disabled="!formIsValid && loading && NOCstat != '' &&  creditFormstat != '' && imageURL != ''"
                  type="submit"
                  :loading="loading"
                  @click="onCreateNode"
                  >Apply</v-btn
                >
                <v-btn text class="mx-2" @click="e6 = 4">Back</v-btn>
                </v-flex>
              </v-stepper-content>
            </v-stepper>
          </form>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>


<style>
  .warn{
    color: red;
  }
</style>

<script>
import firebase from "@/plugins/firebase";

export default {
  name: "application",
  data() {
    return {
      e6: 1,
      modal: false,
      program: ["Exchange", "Internship", "Short-term", "Visit"],
      religions: ["Atheist/ Agnostic", "Buddhist", "Christian", "Hindu", "Jain", "Jewish", "Muslim", "Sikh"],
      dropdown1: ["Female", "Male", "Transgender"],
      dropdown2: ["Divorced", "Married", "Single", "Widowed"],
      dropdown3: ["Bachelors", "Diploma", "Masters", "PhD"],
      dropdown4: ["No", "Yes"],
      dropdown5: ["Exchange Program", "Short Term Program", "Internship Program", "Visits"],
      dropdown6: ["Home Institution", "Self sponsored", "Sponsored"],
      dropdown7: ["Proficient", "Moderate", "Weak"],
      dropdown8: ["Proficient", "Moderate", "Weak", "Not Applicable"],
      countrydrop: ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom", "United States of America" ,"Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"],
      countrycode: ["+93","+355","+213","+376","+244","+1264","+1268","+54","+374","+297","+61","+43","+994","+1242","+973","+880","+1246","+375","+32","+501","+229","+1441","+975","+387","+267","+55","+55","+246","+673","+359","+226","+257","+855","+237","+1","+238","+1345","+236","+235","+56","+86","+61","+61","+57","+269","+242","+682","+506","+385","+53","+357","+420","+45","+253","+1767","+1849","+593","+20","+503","+240","+291","+372","+251","+500","+298","+679","+358","+33","+594","+689","+241","+220","+995","+49","+233","+350","+30","+299","+1473","+590","+1671","+502","+44","+224","+245","+592","+509","+672","+379","+504","+852","+36","+354","+91","+62","+98","+964","+353","+44","+972","+39","+1876","+81","+44","+962","+7","+254","+686","+965","+996","+856","+371","+961","+266","+231","+423","+370","+352","+853","+261","+265","+60","+960","+223","+356","+692","+596","+222","+230","+262","+52","+377","+976","+382","+1664","+212","+258","+95","+264","+674","+977","+31","+687","+64","+505","+227","+234","+683","+672","+1670","+47","+968","+92","+680","+507","+675","+595","+51","+63","+870","+48","+351","+1939","+974","+262","+40","+250","+1869","+1758","+508","+1784","+685","+378","+239","+966","+221","+381","+248","+232","+65","+421","+386","+677","+252","+27","+500","+34","+94","+249","+597","+268","+46","+41","+963","+886","+992","+66","+670","+228","+690","+676","+1868","+216","+90","+993","+1649","+688","+256","+380","+971","+44","+1","+1581","+598","+998","+678","+84","+681","+967","+260","+263"],
      languageslist: ["Abkhazian", "Afar", "Afrikaans", "Akan", "Albanian", "Amharic", "Arabic", "Aragonese", "Armenian", "Assamese", "Avaric", "Avestan", "Aymara", "Azerbaijani", "Bambara", "Bashkir", "Basque", "Belarusian", "Bengali", "Bihari languages", "Bislama", "Bosnian", "Breton", "Bulgarian", "Burmese", "Catalan, Valencian", "Central Khmer", "Chamorro", "Chechen", "Chichewa, Chewa, Nyanja", "Chinese", "Church Slavonic, Old Bulgarian, Old Church Slavonic", "Chuvash", "Cornish", "Corsican", "Cree", "Croatian", "Czech", "Danish", "Divehi, Dhivehi, Maldivian", "Dutch, Flemish", "Dzongkha", "English", "Esperanto", "Estonian", "Ewe", "Faroese", "Fijian", "Finnish", "French", "Fulah", "Gaelic, Scottish Gaelic", "Galician", "Ganda", "Georgian", "German", "Gikuyu, Kikuyu", "Greek (Modern)", "Greenlandic, Kalaallisut", "Guarani", "Gujarati", "Haitian, Haitian Creole", "Hausa", "Hebrew", "Herero", "Hindi", "Hiri Motu", "Hungarian", "Icelandic", "Ido", "Igbo", "Indonesian", "Interlingua (International Auxiliary Language Association)", "Interlingue", "Inuktitut", "Inupiaq", "Irish", "Italian", "Japanese", "Javanese", "Kannada", "Kanuri", "Kashmiri", "Kazakh", "Kinyarwanda", "Komi", "Kongo", "Korean", "Kwanyama, Kuanyama", "Kurdish", "Kyrgyz", "Lao", "Latin", "Latvian", "Letzeburgesch, Luxembourgish", "Limburgish, Limburgan, Limburger", "Lingala", "Lithuanian", "Luba-Katanga", "Macedonian", "Malagasy", "Malay", "Malayalam", "Maltese", "Manx", "Maori", "Marathi", "Marshallese", "Moldovan, Moldavian, Romanian", "Mongolian", "Nauru", "Navajo, Navaho", "Northern Ndebele", "Ndonga", "Nepali", "Northern Sami", "Norwegian", "Norwegian Bokmål", "Norwegian Nynorsk", "Nuosu, Sichuan Yi", "Occitan (post 1500)", "Ojibwa", "Oriya", "Oromo", "Ossetian, Ossetic", "Pali", "Panjabi, Punjabi", "Pashto, Pushto", "Persian", "Polish", "Portuguese", "Quechua", "Romansh", "Rundi", "Russian", "Samoan", "Sango", "Sanskrit", "Sardinian", "Serbian", "Shona", "Sindhi", "Sinhala, Sinhalese", "Slovak", "Slovenian", "Somali", "Sotho, Southern", "South Ndebele", "Spanish, Castilian", "Sundanese", "Swahili", "Swati", "Swedish", "Tagalog", "Tahitian", "Tajik", "Tamil", "Tatar", "Telugu", "Thai", "Tibetan", "Tigrinya", "Tonga (Tonga Islands)", "Tsonga", "Tswana", "Turkish", "Turkmen", "Twi", "Uighur, Uyghur", "Ukrainian", "Urdu", "Uzbek", "Venda", "Vietnamese", "Volap_k", "Walloon", "Welsh", "Western Frisian", "Wolof", "Xhosa", "Yiddish", "Yoruba", "Zhuang, Chuang", "Zulu" 
],
photo: null,
      CreditForm: null,
      NOCForm: null,
      snackbarText: "",
      snackbar: false,
      loading: false,
      name: "",
      programme: "",
      passportno: "",
      studentcode: "",
      mobileno: "",
      DoB: "",
      age: "",
      placeofbirth: "",
      gender: "",
      maritalstatus: "",
      religion: "",
      email: "",
      nextOfKin: "",
      kincode: "",
      contactNextOfKin: "",
      currentAddress: "",
      state: "",
      country: "",
      postalCode: "",
      uniName: "",
      uniWebsite: "",
      unicode: "",
      uniContact: "",
      uniFax: "",
      uniEmail: "",
      faculty: "",
      programOfStudy: "",
      degree: "",
      imageURL: "",
      NOCstat:"",
      creditFormstat:"",
      semester: "",
      cgpa: "",
      yearOfGraduation: "",
      achievement: "",
      coCurricular: "",
      skills: "",
      schoolMUJ: "",
      mouStatus: "",
      mobilityProg: "",
      research: "",
      supervisor: "",
      equipmentsReq: "",
      credit: "",
      coursesTaken: "",
      financialInfo: "",
      sponsor: "",
      nativeLang: "",
      englishPro: "",
      hindiPro: "",
      otherLangName: "",
      otherPro: "",
      interOfficeOfficial: "",
      poition: "",
      dept: "",
      correspondenceAdd: "",
      corCode:"",
      corContact: "",
      corFax: "",
      corEmail: "",
    };
  },
  computed: {
    formIsValid() {
      return (
        this.name !== "" &&
        this.programme !== "" &&
        this.passportno !== "" &&
        this.studentcode !=="" &&
        this.mobileno !== "" &&
        this.DoB !== "" &&
        this.age !== "" &&
        this.placeofbirth !== "" &&
        this.religion !== "" &&
        this.email !== "" &&
        this.nextOfKin !== "" &&
        this.kincode !== "" &&
        this.contactNextOfKin !== "" &&
        this.currentAddress !== "" &&
        this.state !== "" &&
        this.country !== "" &&
        this.postalCode !== "" &&
        this.uniName !== "" &&
        this.uniWebsite !== "" &&
        this.unicode !== "" &&
        this.uniContact !== "" &&
        this.uniFax !== "" &&
        this.uniEmail !== "" &&
        this.faculty !== "" &&
        this.programOfStudy !== "" &&
        this.degree !== "" &&
        this.skills !== "" &&
        this.schoolMUJ !== "" &&
        this.mouStatus !== "" &&
        this.mobilityProg !== "" &&
        this.research !== "" &&
        this.supervisor !== "" &&
        this.equipmentsReq !== "" &&
        this.credit !== "" &&
        this.coursesTaken !== "" &&
        this.financialInfo !== "" &&
        this.sponsor !== "" &&
        this.nativeLang !== "" &&
        this.englishPro !== "" &&
        this.hindiPro !== "" &&
        this.otherLangName !== "" &&
        this.otherPro !== "" &&
        this.interOfficeOfficial !== "" &&
        this.poition !== "" &&
        this.dept !== "" &&
        this.correspondenceAdd !== "" &&
        this.corCode !== "" &&
        this.corContact !== "" &&
        this.corFax !== "" &&
        this.corEmail !== ""
      );
    }
  },
  methods: {
    onCreateNode() {
      if (!this.formIsValid) {
        return;
      }
      this.loading = true;
      const studentData = {
        name: this.name,
        programme: this.programme,
        passportno: this.passportno,
        /* mobilenoCode: this.studentcode, */
        mobileno: this.studentcode.concat(this.mobileno),
        DoB: this.DoB,
        placeofbirth: this.placeofbirth,
        gender: this.gender,
        maritalstatus: this.maritalstatus,
        religion: this.religion,
        email: this.email,
        nextOfKin: this.nextOfKin,
        contactNextOfKin: this.kincode.concat(this.contactNextOfKin),
        currentAddress: this.currentAddress,
        state: this.state,
        country: this.country,
        postalCode: this.postalCode,
        uniName: this.uniName,
        uniWebsite: this.uniWebsite,
        uniContact: this.unicode.concat(this.uniContact),
        uniFax: this.uniFax,
        uniEmail: this.uniWebsite,
        faculty: this.faculty,
        programOfStudy: this.programOfStudy,
        degree: this.degree,
        skills: this.skills,
        schoolMUJ: this.schoolMUJ,
        mouStatus: this.mouStatus,
        mobilityProg: this.mobilityProg,
        research: this.research,
        supervisor: this.supervisor,
        equipmentsReq: this.equipmentsReq,
        credit: this.credit,
        coursesTaken: this.coursesTaken,
        financialInfo: this.financialInfo,
        sponsor: this.sponsor,
        nativeLang: this.nativeLang,
        englishPro: this.englishPro,
        hindiPro: this.hindiPro,
        otherLangName: this.otherLangName,
        otherPro: this.otherPro,
        interOfficeOfficial: this.interOfficeOfficial,
        poition: this.poition,
        dept: this.dept,
        correspondenceAdd: this.correspondenceAdd,
        /* corCode: this.corCode, */
        corContact: this.corCode.concat(this.corContact),
        corFax: this.corFax,
        corEmail: this.corEmail,
        imageURL: this.imageURL,
        NOCstat: this.NOCstat,
        creditFormstat: this.creditFormstat
      };
      this.$store
        .dispatch("pushStudentData", studentData)
        .then(message => {
          this.snackbarText = message;
          this.snackbar = true;
          this.loading = false;
        })
        .catch(error => {
          this.snackbarText = error;
          this.snackbar = true;
          this.loading = false;
        });
    },
    uploadPhoto() {
      if (this.photo == null || this.photo == undefined) return;
      var storageRef = firebase.storage().ref();
      this.loading = true;
      var uploadTask = storageRef
        .child(`documents/${this.mobileno}/${this.photo.name}`)
        .put(this.photo);
      uploadTask
        .then(snapshot => {
          console.log(snapshot);
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            this.imageURL = downloadURL;
          });
          this.photo = null;
          this.snackbarText = "Uploaded successfully!";
          this.snackbar = true;
          this.loading = false;
        })
        .catch(error => {
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              this.snackbarText =
                "You are unauthorized to perform this action!";
              break;
            case "storage/canceled":
              // User canceled the upload
              this.snackbarText =
                "Storage cancelled abruplty. Please try again!";
              break;
            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              this.snackbarText = "An error occured. Please try again!";
              break;
          }
          this.snackbar = true;
        });
    },

        uploadNOCForm() {
      if (this.NOCForm == null || this.NOCForm == undefined) return;
      var storageRef = firebase.storage().ref();
      this.loading = true;
      var uploadTask = storageRef
        .child(`documents/${this.mobileno}/${this.NOCForm.name}`)
        .put(this.NOCForm);
      uploadTask
        .then(snapshot => {
          console.log(snapshot);
          this.NOCstat = "uploaded";
          this.NOCForm = null;
          this.snackbarText = "Uploaded successfully!";
          this.snackbar = true;
          this.loading = false;
        })
        .catch(error => {
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              this.snackbarText =
                "You are unauthorized to perform this action!";
              break;
            case "storage/canceled":
              // User canceled the upload
              this.snackbarText =
                "Storage cancelled abruplty. Please try again!";
              break;
            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              this.snackbarText = "An error occured. Please try again!";
              break;
          }
          this.snackbar = true;
        });
    },

        uploadCreditForm() {
      if (this.CreditForm == null || this.CreditForm == undefined) return;
      var storageRef = firebase.storage().ref();
      this.loading = true;
      var uploadTask = storageRef
        .child(`documents/${this.mobileno}/${this.CreditForm.name}`)
        .put(this.CreditForm);
      uploadTask
        .then(snapshot => {
          console.log(snapshot);
          this.creditFormstat = "uploaded";
          this.CreditForm = null;
          this.snackbarText = "Uploaded successfully!";
          this.snackbar = true;
          this.loading = false;
        })
        .catch(error => {
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              this.snackbarText =
                "You are unauthorized to perform this action!";
              break;
            case "storage/canceled":
              // User canceled the upload
              this.snackbarText =
                "Storage cancelled abruplty. Please try again!";
              break;
            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              this.snackbarText = "An error occured. Please try again!";
              break;
          }
          this.snackbar = true;
        });
    }
  }
};
</script>
