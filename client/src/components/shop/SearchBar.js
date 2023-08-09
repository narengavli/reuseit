import { useState, useEffect, useRef } from 'react';
import { Box, IconButton } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import styles from './styles/searchbar.module.css';

const SearchBar = ({ suggestions, onSearch }) => {
    const [searchValue, setSearchValue] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [activeSuggestion, setActiveSuggestion] = useState(0);
    const suggestionBoxRef = useRef(null);

    useEffect(() => {
        // Close suggestions box when clicking outside of it
        const handleClickOutside = (event) => {
            if (suggestionBoxRef.current && !suggestionBoxRef.current.contains(event.target)) {
                setFilteredSuggestions([]);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleInputChange = (event) => {
        const searchValue = event.target.value;
        setSearchValue(searchValue);

        const containsLetter = searchValue.toLowerCase().match(/[a-z]/i);

        if (containsLetter) {
            const filtered = suggestions.filter((suggestion) =>
                suggestion.toLowerCase().includes(searchValue.toLowerCase())
            ).slice(0, 5);
            setFilteredSuggestions(filtered);
        } else {
            setFilteredSuggestions([]);
        }

        // Reset activeSuggestion when the input value changes
        setActiveSuggestion(0);
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchValue(suggestion);
        setFilteredSuggestions([]);
    };

    const handleSearchButtonClick = (event) => {
        onSearch(searchValue);
    };

    const handleKeyDown = (event) => {
        if (filteredSuggestions.length > 0) {
            // Up arrow key
            if (event.keyCode === 38) {
                event.preventDefault();
                setActiveSuggestion((prevActive) =>
                    prevActive === 0 ? filteredSuggestions.length - 1 : prevActive - 1
                );
            }
            // Down arrow key
            else if (event.keyCode === 40) {
                event.preventDefault();
                setActiveSuggestion((prevActive) =>
                    prevActive === filteredSuggestions.length - 1 ? 0 : prevActive + 1
                );
            }
            // Enter key
            else if (event.keyCode === 13) {
                event.preventDefault();
                setSearchValue(filteredSuggestions[activeSuggestion]);
                setFilteredSuggestions([]);
            }
        }
    };

    return (
        <Box className={styles.container}>
            <Box className={styles.searchBox}>
                <input
                    type="text"
                    value={searchValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Type to search..."
                    className={styles.searchInput}
                />
                <IconButton aria-label="search" onClick={handleSearchButtonClick}>
                    <SearchRoundedIcon />
                </IconButton>
            </Box>
            <ul className={styles.suggestionBox} ref={suggestionBoxRef}>
                {filteredSuggestions.map((suggestion, index) => (
                    <li
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className={`${styles.suggestionItem} ${index === activeSuggestion ? styles.active : ''}`}
                    >
                        {suggestion}
                    </li>
                ))}
            </ul>
        </Box>
    );
};

export default SearchBar;
