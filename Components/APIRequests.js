import axios from "axios";

const localizedDomain = "https://testapi.themobnation.com";
// const localizedDomain = "http://localhost:8080";

const headers = (accessToken, formData) => {
  return {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "content-type": formData ? "multipart/form-data" : "application/json",
    },
  };
};

////////////// GET REQUESTS //////////////
const getRequest = (url, handleSuccess, accessToken, handleError) => {
  const options = [url];
  if (accessToken) {
    options.push(headers(accessToken));
  }
  axios
    .get(...options)
    .then((response) => {
      if (response.status === 200) {
        handleSuccess(response.data);
      }
    })
    .catch((error) => {
      !!handleError && handleError(error.response.data);
    });
};

export const profileRequest = (memberId, setProfile) => {
  const url = `${localizedDomain}/api/getMember?memberID=${memberId}`;
  const handleSuccess = (data) => {
    setProfile(data[0]);
  };
  getRequest(url, handleSuccess);
};

export const listingRequest = (listingId, setListing) => {
  const url = `${localizedDomain}/api/getCompany?companyID=${listingId}`;
  const handleSuccess = (data) => {
    setListing(data);
  };
  getRequest(url, handleSuccess);
};

export const categoriesRequest = (setCategories) => {
  const url = `${localizedDomain}/api/getCategories`;
  const handleSuccess = (data) => {
    setCategories(data);
  };
  getRequest(url, handleSuccess);
};

export const tagsRequest = (setTags) => {
  const url = `${localizedDomain}/api/getOwnerTags`;
  const handleSuccess = (data) => {
    setTags(data);
  };
  getRequest(url, handleSuccess);
};

export const companiesRequest = (url, handleSuccess, handleError) => {
  const componentCallback = (data) => {
    handleSuccess(data);
  };
  getRequest(url, componentCallback, null, handleError);
};

export const stripeLinkRequest = (accessToken) => {
  const url = `${localizedDomain}/api/getStripePortal`;
  const handleSuccess = (url) => {
    window.open(url, "_blank");
  };
  getRequest(url, handleSuccess, accessToken);
};

////////////// POST REQUESTS //////////////

const postRequest = (url, accessToken, body, handleSuccess) => {
  axios
    .post(url, body, headers(accessToken, true))
    .then((response) => {
      if (response.status === 200) {
        handleSuccess(response.data);
      }
    })
    .catch((error) => {
      console.log("#error#", error);
    });
};

export const profilePostRequest = (accessToken, body, handleSuccess) => {
  const url = `${localizedDomain}/api/editProfile`;
  postRequest(url, accessToken, body, handleSuccess);
};

export const listingPostRequest = (accessToken, body, handleSuccess) => {
  const url = `${localizedDomain}/api/editListing`;
  postRequest(url, accessToken, body, handleSuccess);
};

export const createListingRequest = (accessToken, body, handleSuccess) => {
  const url = `${localizedDomain}/api/createListing`;
  postRequest(url, accessToken, body, handleSuccess);
};

////////////// URL BUILDERS //////////////
export const directoryUrlBuilder = (
  pageNumber,
  filterField,
  filterValue,
  randKey
) => {
  const domain = localizedDomain;
  const generic = `/api/getDirectory?page=${pageNumber}&pageSize=11`;
  const filters = !!filterField
    ? `&filterField=${filterField}&filterValue=${filterValue}`
    : null;
  const randomKey = randKey !== null ? `&randKey=${randKey}` : null;

  let url = "";
  const urlSegments = [domain, generic, filters, randomKey];
  urlSegments.forEach((segment) => (!!segment ? (url += segment) : url));
  return url;
};
