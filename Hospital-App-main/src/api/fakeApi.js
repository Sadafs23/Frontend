const patients = [
    { id: 1, name: "Swapnil Shinde", age: 30, disease: "Flu", contact: "123-456-7890", address: "123 Main St", admissionDate: "2024-01-10", history: "No known allergies." },
    { id: 2, name: "Saba Shaikh", age: 25, disease: "Cold", contact: "987-654-3210", address: "456 Elm St", admissionDate: "2024-01-15", history: "Asthma." },
    { id: 3, name: "Naziya Sayyad", age: 40, disease: "Headache", contact: "456-789-1230", address: "789 Pine St", admissionDate: "2024-01-20", history: "Diabetes and BP" },
    { id: 4, name: "Rahul Patil", age: 50, disease: "Diabetes", contact: "321-654-9870", address: "101 Oak St", admissionDate: "2024-02-01", history: "Type 2 diabetes for 10 years. Insulin-dependent." },
    { id: 5, name: "Pooja Desai", age: 35, disease: "Migraine", contact: "741-852-9630", address: "222 Birch St", admissionDate: "2024-02-05", history: "Frequent migraine attacks." },
    { id: 6, name: "Amit Joshi", age: 28, disease: "Food Poisoning", contact: "963-852-7410", address: "333 Cedar St", admissionDate: "2024-02-08", history: "Allergic to shellfish." },
    { id: 7, name: "Neha Kulkarni", age: 45, disease: "Hypertension", contact: "159-357-2580", address: "444 Maple St", admissionDate: "2024-02-12", history: "On regular medication." },
    { id: 8, name: "Vikas Reddy", age: 55, disease: "Arthritis", contact: "753-951-4560", address: "555 Spruce St", admissionDate: "2024-02-15", history: "Osteoarthritis in both knees." },
    { id: 9, name: "Rohini Nair", age: 32, disease: "Pneumonia", contact: "852-369-7410", address: "666 Willow St", admissionDate: "2024-02-18", history: "No prior respiratory issues." },
    { id: 10, name: "Suresh Verma", age: 60, disease: "Heart Disease", contact: "369-258-1470", address: "777 Cherry St", admissionDate: "2024-02-20", history: "Bypass surgery 3 years ago." },
];

export const fetchPatients = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(patients);
        }, 1000);
    });
};

export const fetchPatientById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const patient = patients.find(p => p.id === id);
            resolve(patient);
        }, 1000);
    });
};
