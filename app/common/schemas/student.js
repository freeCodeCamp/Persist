import validator, { messages, enums } from '../validator';

const termSchema = Schema =>
    new Schema({
        name: String,
        college: {
            type: Schema.Types.ObjectId,
            ref: 'College'
        },
        status: String,
        enrolBegin: Date,
        enrolEnd: Date,
        creditsEarned: Number,
        creditsAttempted: Number,
        recordType: {
            type: String,
            default: 'Counselor Added'
        },
        gpa: Number,
        graduationType: {
            type: String,
            lowercase: true
        },
        degreeTitle: {
            type: [String],
            validate: {
                validator: validator['terms.degreeTitle'],
                message: messages.default
            }
        }
    });

const documentSchema = Schema =>
    new Schema({
        name: String,
        type: String,
        Key: String,
        downloadLink: String
    });

const caseNotesSchema = Schema =>
    new Schema({
        description: String,
        communicationType: {
            type: String,
            enum: enums['caseNotes.communicationType']
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        date: Date,
        needFollowUp: {
            type: Boolean,
            default: false
        },
        issueResolved: {
            type: Boolean,
            default: false
        },
        comment: String
    });

const applicationsSchema = Schema =>
    new Schema({
        college: {
            type: Schema.Types.ObjectId,
            ref: 'College'
        },
        type: {
            type: String,
            enum: enums['applications.type']
        },
        result: {
            type: String,
            enum: enums['applications.result']
        },
        heop: {
            type: String,
            enum: enums['application.heop']
        },
        attending: {
            type: Boolean,
            default: false
        },
        defer: {
            type: Boolean,
            default: false
        },
        notes: String
    });

const graduationsSchema = Schema =>
    new Schema({
        college: {
            type: Schema.Types.ObjectId,
            ref: 'College'
        },
        status: String,
        enrolBegin: Date,
        enrolEnd: Date,
        type: String
    });

const aliasSchema = Schema =>
    new Schema({
        firstName: String,
        lastName: String,
        middleName: String,
        suffix: String
    });

export default Schema => {
    return {
        aliases: [aliasSchema(Schema)],
        alias: {
            type: Boolean,
            default: false
        },
        ethnicity: {
            type: Number,
            min: [1, 'Ethnicity must be between 1 and 7'],
            max: [7, 'Ethnicity must be between 1 and 7']
        },
        gender: {
            type: String,
            enum: enums.gender
        },
        hsGradDate: Date,
        osis: {
            type: Number,
            unique: true
        },
        nscRecordFound: {
            type: Boolean,
            default: false
        },
        address: String,
        altName: String,
        amountOfNeedGap: Number,
        dob: {
            type: Date
        },
        cellPhone: String,
        crewAdvisor: String,
        email: [String],
        ferpa: {
            type: Boolean,
            default: false
        },
        firstName: {
            type: String,
            index: true
        },
        fsaid: Number,
        hs: {
            type: Schema.Types.ObjectId,
            ref: 'School'
        },
        cohort: String,
        hsDiplomaType: String,
        hsGPA: Number,
        hsGradYear: Number,
        intendedCollege: {
            type: Schema.Types.ObjectId,
            ref: 'College'
        },
        lastName: String,
        levelOfSupport: String,
        middleName: String,
        fullName: String,
        needGap: {
            type: Boolean,
            default: false
        },
        otherPhone: [String],
        postSecPlan: {
            type: String,
            enum: enums.postSecPlan
        },
        preferredPronoun: String,
        descriptors: {
            type: [String],
            validate: {
                validator: validator.descriptors,
                message: messages.default
            }
        },
        studentSupportOrgName: {
            type: [String],
            validate: {
                validator: validator.studentSupportOrgName,
                message: messages.default
            }
        },
        studentSupportOrgNameOther: String,
        suffix: String,
        employmentStatus: {
            type: [String],
            validate: {
                validator: validator.employmentStatus,
                message: messages.default
            }
        },
        mostRecentCol: {
            type: Schema.Types.ObjectId,
            ref: 'College'
        },
        firstCol: {
            type: Schema.Types.ObjectId,
            ref: 'College'
        },
        mostRecentEmp: String,
        gradDate: Date,
        majorMinor: [String],
        progressToGradAss: {
            type: String,
            enum: enums.progressToGradAss
        },
        progressToGradBa: {
            type: String,
            enum: enums.progressToGradBa
        },
        remediationStatus: {
            type: [String],
            validate: {
                validator: validator.remediationStatus,
                message: messages.default
            }
        },
        transferStatus: {
            type: [String],
            validate: {
                validator: validator.transferStatus,
                message: messages.default
            }
        },
        actEquiv: Number,
        applicationWave: {
            type: Number,
            min: [1, 'Application Wave must be between 1 and 3'],
            max: [3, 'Application Wave must be between 1 and 3']
        },
        appliedToOtherSupportProgram: {
            type: Boolean,
            default: false
        },
        attendingMeetupDay: {
            type: Boolean,
            default: false
        },
        awardLetterReceived: {
            type: Boolean,
            default: false
        },
        commonApp: {
            type: String,
            enum: enums.commonApp
        },
        completedEssay: {
            type: Boolean,
            default: false
        },
        completedFafsa: {
            type: Boolean,
            default: false
        },
        completedTap: {
            type: Boolean,
            default: false
        },
        cssProfileCreated: {
            type: Boolean,
            default: false
        },
        cunyApp: {
            type: String,
            enum: enums.cunyApp
        },
        desiredFieldOfStudy: String,
        eaEdApplications: {
            type: Boolean,
            default: false
        },
        expectedHSGrad: Date,
        facebookName: String,
        lettersOfRecommendation: {
            type: Boolean,
            default: false
        },
        opportunityProgramEligible: {
            type: Boolean,
            default: false
        },
        parentContact: [String],
        parentName: [String],
        psat: Number,
        registeredForClasses: {
            type: String,
            enum: enums.registeredForClasses
        },
        residency: {
            type: String,
            enum: enums.residency
        },
        SAT: {
            cr: Number,
            math: Number,
            subjectTest: Number
        },
        scholarshipAmount: Number,
        startedFafsa: {
            type: Boolean,
            default: false
        },
        studentAidReportReceived: {
            type: Boolean,
            default: false
        },
        sunyApp: {
            type: String,
            enum: enums.sunyApp
        },
        taxDocumentsSubmitted: {
            type: Boolean,
            default: false
        },
        cumColGPA: Number,
        regents: {
            ela: Number,
            math: Number
        },
        lastModifiedDate: Date,
        lastModifiedBy: String,
        hsID: Number,
        lastTermGPA: Number,
        mostRecentEnrolStatus: String,
        iniEnrollDate: Date,
        terms: [termSchema(Schema)],
        graduations: [graduationsSchema(Schema)],
        documents: [documentSchema(Schema)],
        caseNotes: [caseNotesSchema(Schema)],
        applications: [applicationsSchema(Schema)],

        tshirtSize: {
            type: String,
            enum: enums.tshirtSize
        },
        sweatshirtSize: {
            type: String,
            enum: enums.sweatshirtSize
        },
        housingStatus: {
            type: String,
            enum: enums.housingStatus
        },
        physImmunRecords: {
            type: String,
            enum: enums.physImmunRecords
        },
        act: Number,
        needsFollowup: {
            type: Boolean,
            default: false
        },
        // TO ADD IN
        expectedGrad: Number,
        photoReleaseForm: {
            type: Boolean,
            default: false
        },
        preferredLanguage: String
    };
};
