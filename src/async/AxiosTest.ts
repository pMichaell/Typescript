import axios, { AxiosRequestConfig } from "axios";

const options: AxiosRequestConfig = {
  params: { c: "list" },
  headers: {
    "X-RapidAPI-Host": "themealdb.p.rapidapi.com",
    "X-RapidAPI-Key": "2b78b914femshec0f550e8473fcbp16e5e3jsncbe85eca22c6",
  },
};

interface CategoriesList {
  meals: { strCategory: string }[];
}

(async function () {
  const response = await axios.get<CategoriesList>(
    "https://themealdb.p.rapidapi.com/list.php",
    options
  );
  console.table(response.data.meals);
})();

let category = "Seafood";

const getOptions: AxiosRequestConfig = {
  params: { c: category },
  headers: {
    "X-RapidAPI-Host": "themealdb.p.rapidapi.com",
    "X-RapidAPI-Key": "2b78b914femshec0f550e8473fcbp16e5e3jsncbe85eca22c6",
  },
};

interface Meal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

interface MealsList {
  meals: Meal[];
}

(async function () {
  let response = await axios.get<MealsList>(
    "https://themealdb.p.rapidapi.com/filter.php",
    getOptions
  );
  console.table(response.data.meals);
})();
