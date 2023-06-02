import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Box, Typography } from "@mui/material";
import { Question } from "./Question";
import { ViewPaper } from "./ViewPaper";

export const PaperQuestions = ({ paperDetails, setValue }) => {
  const [questions, setQuestions] = useState([]);
  const [questionList, setQuestionList] = useState([]);

  const quesHandler = (ques) => {
    setQuestions((prev) => [...prev, ques]);

    setQuestionList(
      questionList.concat(<ViewPaper key={questionList.length} data={ques} />)
    );
  };

  const submitHandler = () => {
    let Papers = [];
    if (localStorage.getItem("Papers")) {
      Papers = JSON.parse(localStorage.getItem("Papers"));
    }

    const currentPaper = {
      details: paperDetails,
      questions,
    };

    Papers.push(currentPaper);
    localStorage.setItem("Papers", JSON.stringify(Papers));

    setValue(0);
  };

  return (
    <Box
      align="start"
      sx={{
        maxWidth: "800px",
        border: "none",
        p: "20px",
        borderRadius: "10px",
        background: "rgba(237, 243, 247,0.8)",
        opacity: 1,
        mb: "20px",
      }}
    >
      <Typography pb={2} fontSize={20}>
        Exam Paper
      </Typography>

      <Question quesHandler={quesHandler} />

      {questionList}

      <Box align="end">
        <Button
          variant="contained"
          type="button"
          sx={{ ml: "20px" }}
          size="large"
          onClick={submitHandler}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

PaperQuestions.propTypes = {
  paperDetails: PropTypes.any,
  setValue: PropTypes.func
};
