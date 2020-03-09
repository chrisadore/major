<template>
  <v-content>
    <v-snackbar v-model="snackbar">
      {{ snackbarText }}
      <v-btn color="pink" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
    <v-container>
      <v-layout row>
        <v-flex>
          <h2>Application Form</h2>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <form @submit.prevent="onCreateNode" class="mx-auto">
            <v-stepper v-model="e6" vertical>
              <v-stepper-step :complete="e6 > 1" step="1">
                Start Applicaton Process
              </v-stepper-step>
              <v-stepper-content step="1">
                <v-card class="elevation-0">
                  <v-col cols="12" md="6">
                    <v-text-field
                      outlined
                      name="name"
                      label="Full Name"
                      id="name"
                      v-model="name"
                      required
                    >
                    </v-text-field>

                    <v-text-field
                      outlined
                      name="programme"
                      label="Name of programme (exchange/ short-term/ internship/ visit)"
                      id="programme"
                      v-model="programme"
                      required
                    >
                    </v-text-field>

                    <v-text-field
                      outlined
                      name="passportno"
                      label="Passport Number"
                      id="passportno"
                      v-model="passportno"
                      required
                    >
                    </v-text-field>

                    <v-text-field
                      outlined
                      name="mobileno"
                      label="Mobile Number"
                      id="mobileno"
                      v-model="mobileno"
                      required
                    >
                    </v-text-field>

                    <v-layout>
                      <v-row justify="space-around" class="mb-5">
                        <v-date-picker
                          width="350px"
                          v-model="DoB"
                          color="green lighten-1"
                        ></v-date-picker>
                      </v-row>
                    </v-layout>

                    <v-text-field
                      outlined
                      name="age"
                      label="Age"
                      id="age"
                      v-model="age"
                      required
                    >
                    </v-text-field>

                    <v-text-field
                      outlined
                      name="placeofbirth"
                      label="Place of Birth"
                      id="placeofbirth"
                      v-model="placeofbirth"
                      required
                    >
                    </v-text-field>

                    <v-overflow-btn
                      outlined
                      class="my-2"
                      :items="dropdown1"
                      name="gender"
                      label="Gender"
                      id="gender"
                      v-model="gender"
                      required
                    ></v-overflow-btn>

                    <v-overflow-btn
                      outlined
                      class="my-2"
                      :items="dropdown2"
                      name="maritalstatus"
                      label="Marital Status"
                      id="maritalstatus"
                      v-model="maritalstatus"
                      required
                    ></v-overflow-btn>

                    <v-text-field
                      outlined
                      name="religion"
                      label="Religion"
                      id="religion"
                      v-model="religion"
                      multi-line
                      required
                    >
                    </v-text-field>

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
                      name="country"
                      label="Country"
                      id="country"
                      v-model="country"
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
                  </v-col>
                </v-card>
                <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
              </v-stepper-content>

              <v-stepper-step :complete="e6 > 2" step="2"
                >Education at Home University</v-stepper-step
              >

              <v-stepper-content step="2">
                <v-card class="elevation-0"
                  ><v-col cols="12" md="6">
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

                    <v-overflow-btn
                      outlined
                      class="my-2"
                      :items="dropdown3"
                      name="degree"
                      label="Degree"
                      id="degree"
                      v-model="degree"
                      required
                    ></v-overflow-btn>

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
                  </v-col>
                </v-card>
                <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
                <v-btn text @click="e6 = 1">Back</v-btn>
              </v-stepper-content>

              <v-stepper-step :complete="e6 > 3" step="3"
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

              <v-stepper-step :complete="e6 > 4" step="4"
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

                  <v-overflow-btn
                    outlined
                    class="my-2"
                    :items="dropdown4"
                    name="mouStatus"
                    label="Does Your University Have MOU with MUJ"
                    id="mouStatus"
                    v-model="mouStatus"
                    required
                  ></v-overflow-btn>

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

                  <v-overflow-btn
                    outlined
                    class="my-2"
                    :items="dropdown4"
                    name="credit"
                    label="Transfer of credits required(please fill Academic Transcript Form)"
                    id="credit"
                    v-model="credit"
                    required
                  ></v-overflow-btn>

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

              <v-stepper-step :complete="e6 > 5" step="5"
                >Financial Information</v-stepper-step
              >
              <v-stepper-content step="5">
                <v-card class="mt-2 elevation-0">
                  <v-overflow-btn
                    outlined
                    class="my-2"
                    :items="dropdown6"
                    name="financialInfo"
                    label="Financial Information"
                    id="financialInfo"
                    v-model="financialInfo"
                    required
                  ></v-overflow-btn>

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

              <v-stepper-step :complete="e6 > 6" step="6"
                >Language Proficiency</v-stepper-step
              >
              <v-stepper-content step="6">
                <v-card class="mt-2 elevation-0">
                  <v-text-field
                    outlined
                    name="nativeLang"
                    label="Native Language"
                    id="nativeLang"
                    v-model="nativeLang"
                  >
                  </v-text-field>

                  <v-overflow-btn
                    outlined
                    class="my-2"
                    :items="dropdown7"
                    name="englishPro"
                    label="English"
                    id="englishPro"
                    v-model="englishPro"
                    required
                  ></v-overflow-btn>

                  <v-overflow-btn
                    outlined
                    class="my-2"
                    :items="dropdown7"
                    name="hindiPro"
                    label="Hindi"
                    id="hindiPro"
                    v-model="hindiPro"
                    required
                  ></v-overflow-btn>

                  <v-text-field
                    outlined
                    name="otherLangName"
                    label="Other Language"
                    id="otherLangName"
                    v-model="otherLangName"
                  >
                  </v-text-field>

                  <v-overflow-btn
                    outlined
                    class="my-2"
                    :items="dropdown8"
                    name="otherPro"
                    label="Other Language"
                    id="otherPro"
                    v-model="otherPro"
                    required
                  ></v-overflow-btn>
                </v-card>
                <v-btn color="primary" @click="e6 = 7">Continue</v-btn>
                <v-btn text @click="e6 = 5">Back</v-btn>
              </v-stepper-content>

              <v-stepper-step :complete="e6 > 7" step="7"
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
                    label="Email Number"
                    id="corEmail"
                    v-model="corEmail"
                    required
                  >
                  </v-text-field>
                </v-card>
                <v-btn color="primary" @click="e6 = 8">Continue</v-btn>
                <v-btn text @click="e6 = 6">Back</v-btn>
              </v-stepper-content>

              <v-stepper-step step="8"
                >Documents <small>Summarize if needed</small></v-stepper-step
              >
              <v-stepper-content step="8">
                <v-card class="elevation-0 mb-4">
                  <p>Forms available at 'Learn More' section</p>
                  <v-file-input
                    accept="image/*"
                    label="Upload Credit Mapping Form"
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
                  <img :src="imageURL" alt="" />
                  <!-- <v-file-input name="NOC" id="NOC"  accept=".pdf" label="Upload NOC"></v-file-input>
          <v-file-input name="creditForm" id="creditForm"  accept=".pdf" label="Upload Your creditForm"></v-file-input> -->
                </v-card>
                <v-btn
                  class="primary"
                  :disabled="!formIsValid || loading"
                  type="submit"
                  >Create meetup</v-btn
                >
                <v-btn text @click="e6 = 4">Back</v-btn>
              </v-stepper-content>
            </v-stepper>
          </form>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import firebase from "@/plugins/firebase";

export default {
  name: "application",
  data() {
    return {
      e6: 8,
      dropdown1: ["male", "female", "transgender", "others"],
      dropdown2: ["married", "single", "divorced", "widow"],
      dropdown3: ["Bachelors", "Masters", "Diploma", "PhD"],
      dropdown4: ["No", "Yes"],
      dropdown5: [
        "Exchange Program",
        "Short Term Program",
        "Internship Program",
        "Visits"
      ],
      dropdown6: ["Self sponsored", "Home Institution", "Sponsored"],
      dropdown7: ["Proficient", "Moderate", "Weak"],
      dropdown8: ["Proficient", "Moderate", "Weak", "Not Applicable"],
      photo: null,
      snackbarText: "",
      snackbar: false,
      loading: false,
      name: "",
      programme: "",
      passportno: "",
      mobileno: "",
      DoB: "",
      age: "",
      placeofbirth: "",
      gender: "",
      maritalstatus: "",
      religion: "",
      email: "",
      nextOfKin: "",
      contactNextOfKin: "",
      currentAddress: "",
      state: "",
      country: "",
      postalCode: "",
      uniName: "",
      uniWebsite: "",
      uniContact: "",
      uniFax: "",
      uniEmail: "",
      faculty: "",
      programOfStudy: "",
      degree: "",
      imageURL: "",
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
      corContact: "",
      corFax: "",
      corEmail: ""
    };
  },
  computed: {
    formIsValid() {
      return (
        this.name !== "" &&
        this.programme !== "" &&
        this.passportno !== "" &&
        this.mobileno !== "" &&
        this.DoB !== "" &&
        this.age !== "" &&
        this.placeofbirth !== "" &&
        this.religion !== "" &&
        this.email !== "" &&
        this.nextOfKin !== "" &&
        this.contactNextOfKin !== "" &&
        this.currentAddress !== "" &&
        this.state !== "" &&
        this.country !== "" &&
        this.postalCode !== "" &&
        this.uniName !== "" &&
        this.uniWebsite !== "" &&
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
      const studentData = {
        name: this.name,
        programme: this.programme,
        passportno: this.passportno,
        mobileno: this.mobileno,
        DoB: this.DoB,
        placeofbirth: this.placeofbirth,
        gender: this.gender,
        maritalstatus: this.maritalstatus,
        religion: this.religion,
        email: this.email,
        nextOfKin: this.nextOfKin,
        contactNextOfKin: this.contactNextOfKin,
        currentAddress: this.currentAddress,
        state: this.state,
        country: this.country,
        postalCode: this.postalCode,
        uniName: this.uniName,
        uniWebsite: this.uniWebsite,
        uniContact: this.uniContact,
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
        corContact: this.corContact,
        corFax: this.corFax,
        corEmail: this.corEmail
      };
      this.$store.dispatch("studentData", studentData);
    },
    uploadPhoto() {
      if (this.photo == null || this.photo == undefined) return;
      var storageRef = firebase.storage().ref();
      this.loading = true;
      storageRef
        .child(`documents/${this.photo.name}`)
        .put(this.photo)
        .then(snapshot => {
          this.loading = false;
          this.photo = null;
          this.snackbarText = "Photo uploaded successfully!";
          this.snackbar = true;
        });
    }
  }
};
</script>
