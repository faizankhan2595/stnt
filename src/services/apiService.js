const axios = require('axios');

export const BASE_URL = `https://api.stntinternational.com`;

export const ManifestFileUpload = async ({ file, travelAgentId, manifestType, }) => {
    console.log('file', file);
    const FormData = require('form-data');
    const fs = require('fs');
    let data = new FormData();
    data.append('file', file)
    data.append('travelAgentId', travelAgentId);
    data.append('manifestType', manifestType);
    //data.append

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: BASE_URL + '/api/manifests',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        data: data
    };

    return await axios.request(config);
}

export const ManifestGetUmrahAll = () => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: BASE_URL + '/api/manifests',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
}

// export const ManifestPopulate = () => {

// let config = {
//   method: 'get',
//   maxBodyLength: Infinity,
//   url: 'http://localhost:8000/api/manifests/pupulate_uploaded_file/7',
//   headers: { 
//     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJzdXBlciJ9LCJpYXQiOjE2ODMxOTI1MjB9.qmNlOHBFOUGMLmyyRpvgt6W3Rz5sOC23CUR0HFSx148'
//   }
// };

// axios.request(config)
// .then((response) => {
//   console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//   console.log(error);
// });

// }

export const ManifestDownloadErrorFile = () => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:8000/api/manifests/error-csv/1',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
}

export const GetAllTravelAgents = async ({ size, page, search }) => {
    let data = JSON.stringify({
        "confirmPassword": "123456",
        "password": "123456",
        "userId": "6"
    });

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: BASE_URL + `/api/travel-agencies?size=${size}&page=${page}&searchByAgencyName=${search}`,
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        data: data
    };

    return await axios.request(config);
}

export const GetTravelAgent = ({ id }) => {

    let data = '{\n    "confirmPassword":"123456",\n    "password":"123456",\n    "userId": "6"\n}';

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: BASE_URL + '/api/travel-agencies/' + id,
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        data: data
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
}

export const AddTravelAgent = async (data) => {
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: BASE_URL + '/api/travel-agencies',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        data: data
    };

    return await axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });

}

export const GetTravelAgency = async ({ id }) => {
    let data = '{\n    "confirmPassword":"123456",\n    "password":"123456",\n    "userId": "6"\n}';

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: BASE_URL + '/api/travel-agencies/' + id,
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        data: data
    };

    return await axios.request(config)
}

export const UpdateTravelAgencyStatus = async (data) => {


    console.log(data);


    let data2 = JSON.stringify(data);

    console.log(data2);


    let config = {
        method: 'put',
        url: BASE_URL + '/api/travel-agencies/change-status',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        data: data2
    };

    return await axios.request(config)
}

export const UpdateTravelAgency = async (data) => {
    let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: BASE_URL + '/api/travel-agencies',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        data: data
    };

    return await axios.request(config)
}

export const DeleteTravelAgency = async ({ id }) => {
    let data = `{\n    "id":${id},\n    "title": "Hello",\n    "description":"This is fastly new Test claim document for the data",\n    "isMandatory": false\n}`;

    let config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: BASE_URL + '/api/travel-agencies/' + id,
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        data: data
    };

    return await axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });

}

export const GetAllTravelAgency = async ({ size, page, search }) => {
    let data = '{\n    "confirmPassword":"123456",\n    "password":"123456",\n    "userId": "6"\n}';

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: BASE_URL + `/api/travel-agencies?size=${size}&page=${page}&searchByAgencyName=${search}`,
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        data: data
    };

    return await axios.request(config)
}

export const verifyDetailsHome = async ({ name, passportNo, uidNo }) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: BASE_URL + `/api/website/verification?name=${name}&passportNo=${passportNo}&uidNo=${uidNo}`,
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
    };

    return await axios.request(config)
}

export const getCountryDropdown = async () => {
    const url = BASE_URL + '/api/website/countries';
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
    return await axios.get(url);
}

// export const addAddress = async ({ address, phoneNumber, emailAddress }) => {
//     let data = JSON.stringify({
//         "address": address,
//         "phoneNumber": phoneNumber,
//         "emailAddress": emailAddress
//     });

//     let config = {
//         method: 'post',
//         maxBodyLength: Infinity,
//         url: BASE_URL + '/api/website/address',
//         headers: {
//             'Authorization': 'Bearer ' + localStorage.getItem('token')
//         },
//         data: data
//     };

//     return await axios.request(config)
// }

export const addClaim = async () => {
    const FormData = require('form-data');
    const fs = require('fs');
    let data = new FormData();
    data.append('claimCategoryId', '1');
    data.append('lossCountry', 'Dubai');
    data.append('Another data This is a claim document 1', fs.createReadStream('/home/meet/Downloads/GROVAY WEBSITE MAIN ERROR REPORT - 12Dec22.pdf'));
    data.append('Another data This is a claim document 1', fs.createReadStream('/home/meet/Downloads/GROVAY WEBSITE MAIN ERROR REPORT - 30Nov22.pdf'));
    data.append('Another data This is a claim document 2', fs.createReadStream('/home/meet/Downloads/1657200518OID1657197748236ST.pdf'));
    data.append('Another data This is a claim document 2', fs.createReadStream('/home/meet/Downloads/1668435491OID1668435473309ST.pdf'));

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: BASE_URL + '/api/website/claim-request',
        headers: {
            ...data.getHeaders()
        },
        data: data
    };

    return await axios.request(config)
}

export const getClaimByUser = async () => {
    let data = '';

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: BASE_URL + '/api/website/claim-request/user',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        data: data
    };

    return await axios.request(config)
}

export const getClaimCategoryAndDocs = async ({ id }) => {
    let data = '';

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: BASE_URL + '/api/website/claim-categories/documents/' + id,
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')

        },
        data: data
    };

    return await axios.request(config)
}

export const getClaimCategories = async () => {
    let data = '';

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: BASE_URL + '/api/website/claim-categories',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')

        },
        data: data
    };

    return await axios.request(config)
}

export const paymentSaveAPI = async ({ data }) => {

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: BASE_URL + '/api/website/claim-request/payment',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        data: data
    };

    return await axios.request(config)
}

export const getCliamMetadata = async () => {
    let data = '';

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: BASE_URL + '/api/website/claim-request/user/meta',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        data: data
    };

    return await axios.request(config)
}

export const getCompleteCliamData = async (id) => {
    let data = '';

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: BASE_URL + '/api/website/claim-request/review/' + id,
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        data: data
    };

    return await axios.request(config)
}

export const getClaimRequests = async () => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: BASE_URL + '/api/kpi/claim-requests',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    };

    return await axios.request(config)
}

export const getAllClaimCategory = async (size, page, searchByTitle) => {
    let data = JSON.stringify({

    });

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: BASE_URL + `/api/claim-category?size=${size}&${page}&searchByTitle=${searchByTitle}`,
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJzdXBlciJ9LCJpYXQiOjE2ODMxOTI1MjB9.qmNlOHBFOUGMLmyyRpvgt6W3Rz5sOC23CUR0HFSx148'
        },
        data: data
    };

    return await axios.request(config)
}

export const addClaimCategory = async ({ title, description }) => {
    let data = JSON.stringify({
        "title": title,
        "description": description,
        "associateClaimType": "silver",
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: BASE_URL + `/api/claim-category`,
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        data: data
    };

    return await axios.request(config)
}

export const deleteClaimCategory = async (id) => {
    let data = JSON.stringify({
        "id": "2",
        "title": "Hello",
        "description": "This is fastly new Test claim document for the data",
        "isMandatory": false
    });

    let config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: BASE_URL + `/api/claim-documents/${id}`,
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        data: data
    };

    return await axios.request(config)
}

export const addAddress = async (data) => {
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: BASE_URL + `/api/website/address`,
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        data: data
    };

    return await axios.request(config)
}

export const updateAddress = async (data) => {
    let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: BASE_URL + `/api/website/address`,
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        data: data
    };

    return await axios.request(config)
}

export const getAddressDetails = async () => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: BASE_URL + `/api/website/address`,
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
    };

    return await axios.request(config)
}