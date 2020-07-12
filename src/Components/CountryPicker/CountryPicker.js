import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import {fetchCountries} from "../../API/Index";

const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCovidCountries, setFetchedCovidCountries] = useState([]);

    useEffect(() => {
        try {
            const fetchAPI = async () => {
                setFetchedCovidCountries(await fetchCountries());
            };
            fetchAPI();
        } catch (error) {
            alert(error);
        }
    }, []);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect
                defaultValue=""
                onChange={e => {
                    handleCountryChange(e.target.value)
                }}
            >
                <option value="global">Global</option>
                {fetchedCovidCountries.map((country, i) => (
                    <option key={i} value={country.iso2}>
                        {country.name}
                    </option>
                ))}
            </NativeSelect>
        </FormControl>
    );
};

export { CountryPicker };