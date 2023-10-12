import {
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  TabProps,
  Box,
  Grid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import InterviewSettingsForm from "./InterviewSettingsForm";
import JobDetailsForm from "./JobDetailsForm";
import RequisitionForm from "./RequisitionDetailsForm";
import DisplayCard from "./PreviewCard";
import { PageNumbers } from "../../interface/home";

const CustomTab: React.FC<TabProps> = ({ children, ...props }) => {
  return (
    <Tab p="1rem" fontFamily="Poppins" {...props}>
      {children}
    </Tab>
  );
};

const HomeLayout = () => {
  const [page, setPage] = useState<PageNumbers>(0);
  const [requisition, setRequisition] = useState<any>({
    requisitionTitle: "",
    noOfOpenings: 0,
    urgency: "",
    gender: "",
  });

  const [jobDetails, setJobDetails] = useState<any>({
    jobTitle: "",
    jobDetails: "",
    jobLocation: "",
  });

  const [interviewSettings, setInterviewSettings] = useState<any>({
    interviewMode: "",
    interviewDuration: "",
    interviewLanguage: "",
  });

  const updateRequisition = (name: any, value: any) => {
    if (requisition) {
      const temp = { ...requisition };
      temp[name] = value;
      setRequisition(temp);
    }
  }

  const updateJobDetails = (name: any, value: any) => {
    if (jobDetails) {
      const temp = { ...jobDetails };
      temp[name] = value;
      setJobDetails(temp);
    }
  }

  const updateInterviewSettings = (name: any, value: any) => {
    if (interviewSettings) {
      const temp = { ...interviewSettings };
      temp[name] = value;
      setInterviewSettings(temp);
    }
  }


  const handlePage = (pageNumber: PageNumbers) => {
    setPage(pageNumber);
  };

  return (
    <Box w="100%">
      <Container maxW="1200px">
        <Heading fontFamily="Poppins" fontSize="1.5rem" my="2rem">
          Create Candidate Requisition
        </Heading>
        <Tabs index={page} isLazy lazyBehavior="keepMounted">
          <TabList>
            <CustomTab>Requistion Details</CustomTab>
            <CustomTab>Job Details</CustomTab>
            <CustomTab>Interview Settings</CustomTab>
          </TabList>
          <Grid display="grid" gridTemplateColumns="3fr 2fr" gap="24px">
            <TabPanels>
              <TabPanel>
                <RequisitionForm handleTab={handlePage} updateRequisition={updateRequisition} />
              </TabPanel>
              <TabPanel>
                <JobDetailsForm handleTab={handlePage} updateJobDetails={updateJobDetails} />
              </TabPanel>
              <TabPanel>
                <InterviewSettingsForm handleTab={handlePage} updateInterviewSettings={updateInterviewSettings} />
              </TabPanel>
            </TabPanels>
            <DisplayCard requisitionDetails={requisition} jobDetails={jobDetails} interviewSettings={interviewSettings} />
          </Grid>
        </Tabs>
      </Container>
    </Box>
  );
};

export default HomeLayout;
