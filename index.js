//Two classes for the proposed system: Student and Admin

// Student class
class Student {
    static AdmissionStatus = true;
    static GeneratedInvoice = true;
    static CompletePaymentStatus = true;
    static RegisterCourseStatus = false;

    static loginToStudentProfile(StudentName, StudentID) {
        if (Student.AdmissionStatus) {
            console.log(`Dear ${StudentName}, ${StudentID}, welcome to your student profile.`);
        } else {
            console.log("Profile not found.");
        }
    }

    static paySchoolFees() {
        if (Student.GeneratedInvoice) {
            console.log("Proceed to make payment with the correct RRR in your invoice from your profile on the school's original mobile app. Do not make payments to any private account!");
        } else {
            console.log("Generate an invoice!");
        }
    }

    static registerCourse(StudentName) {
        if (Student.RegisterCourseStatus) {
            console.log(`Dear ${StudentName}, you have registered all your courses.`);
        } else {
            console.log("Register your courses: Add current courses: \n add carry-over courses: \n Add only the required credit units to the list.");
        }
    }

    static checkResults(StudentID, StudentGrade) {
        if (Student.CompletePaymentStatus) {
            console.log(`Dear ${StudentID}, your CGPA for this semester is ${StudentGrade}.`);
        } else {
            console.log(`${StudentID} does not have a result.`);
        }
    }

    static report(StudentID, StudentGrade) {
        Student.checkResults(StudentID, StudentGrade);
    }
}

// Example 
const studentName = "Nzubechukwu";
const studentID = 2020514118;
const studentGrade = 4.53;
 
Student.loginToStudentProfile(studentName, studentID);
Student.paySchoolFees();  
Student.registerCourse(studentName);  
Student.report(studentID, studentGrade); //these are the four basic function of the school app as regards to the student actor.

// Admin class
class Admin {
    // Static properties (shared across all instances)
    static TotalNnumberOfStudentsInDept = 400;

    constructor(YearOfAdmission, DepartmentNo, UniqueID) {
        this.YearOfAdmission = YearOfAdmission;
        this.DepartmentNo = DepartmentNo;
        this.UniqueID = UniqueID;
    }

    createStudentProfile() {
        if (this.YearOfAdmission === null || this.DepartmentNo === null || this.UniqueID === null) {
            console.log("All parameters (YearOfAdmission, DepartmentNo, UniqueID) are required to create a student registration number.");
            return "Failed to create profile: Missing parameters.";
        }

        if (!Number.isInteger(this.UniqueID) || this.UniqueID <= 0 || this.UniqueID > Admin.TotalNnumberOfStudentsInDept) {
            console.log(`Unique ID must be an integer between 1 and ${Admin.TotalNnumberOfStudentsInDept}.`);
            return "Failed to create profile: Invalid Unique ID.";
        }

        // Concatenate parameters to generate the student registration number
        const registrationNumber = `${this.YearOfAdmission}-${this.DepartmentNo}-${this.UniqueID}`;

        console.log(`Student profile created successfully:
        Registration Number: ${registrationNumber}
        Year of Admission: ${this.YearOfAdmission}
        Department No: ${this.DepartmentNo}
        Unique ID: ${this.UniqueID}`);

        return registrationNumber;
    }

    // Method to generate a receipt
    generateReceipt(userId, amount) {
        console.log(`Receipt generated for User ID ${userId} for the amount of ₦${amount}.`);
        return `Receipt for User ${userId}: $${amount}`;
    }

    // Method to generate a report
    generateReport(reportType) {
        console.log(`Generated ${reportType} report successfully.`);
        return `${reportType} report generated successfully.`;
    }
}

// Example usage
const admin1 = new Admin(2025, "514", 150); 
const regNumber = admin1.createStudentProfile();  
console.log(`Generated Student Registration Number: ${regNumber}`);

// Invalid example
const admin2 = new Admin(2025, "CS101", 450);  // Invalid DepartmentNo, because it is above 400 which is the total number of students
const invalidRegNumber = admin2.createStudentProfile();
console.log(`Generated Student Registration Number: ${invalidRegNumber}`);

admin1.generateReceipt(regNumber, 56300) //instance of using the Reg NO, gotten from the admin1 object
admin1.generateReport("He is in the First Class category for the semester")

