const { Schema, model } = require ('mongoose');

const userSchema = new Schema({
    completeName: String,
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other']
    },
    isPregnant: {
      type: Boolean,
      default: false
    },
    birthday: Date,
    indentity: String,
    whatsAppNo: String,
    community: {
        type: String,
        enum: ['Águia de Ouro',
         'Alto da Boavista',
          'Anil',
          'Bangu',
          'Cidade de Deus',
          'Curicica',
          'Duque de Caixas',
          'Manguinhos',
          'Méier',
          'Muzema',
          'Nilópolis',
          'Nova Iguaçu',
          'Parque da Cidade',
          'Pavão',
          'Realengo',
          'Rio das Pedras',
          'Rocinha',
          'Santa Marta',
          'São Conrado',
          'São Gonçalo',
          'Tijuquinha',
          'Tuiuti',
          'Vidigal',
        ],
    },
    hasChronicDisease: {
        type: Boolean,
        default: false
    },
    chronicDisease: {
        type: String,
        enum: ['Hipertensão (pressão alta)',
        'Diabetes',
        'Problema de respiração (ex: Asma)',
        'Sinusite Crônica',
        'Problema no coração',
        'Tuberculose',
        'Câncer',
        'Bronquite / Asma',
        'Gastrite',
        'Obesidade mórbida',
        ] 
    },
    smokingHabits: {
        type: String,
        enum: ['Sim',
        'Não',
        'Sou ex-fumante',
        ]
    },
    contactWithCovidInfected: {
        type: String,
        enum: ['Tive contato com alguém que testou positivo',
        'Não tive contato',
        'Tive contato com alguém suspeito',
        ]
    },
    hasAnySymptom: {
        type: Boolean,
        default: false
    },
    symptoms: {
        type: String,
        enum: ['Cansaço',
        'Dor no corpo inteiro',
        'Falta de ar',
        'Febre',
        'Nariz escorrendo ou espirros',
        'Dor de cabeça',
        'Perda de apetite',
        'Tosse seca',
        'Dor de garganta',
        'Vômito',
        'Náusea',
        'Diarréia',
        ]
    },
    isPublicHealthCarePractitioner: {
        type: Boolean,
        default: false
    },
    whichHospital: String,
    okWithTermsConditions: {
        type: Boolean,
        default: false
    },
});

module.exports = model('Favelado', userSchema);
