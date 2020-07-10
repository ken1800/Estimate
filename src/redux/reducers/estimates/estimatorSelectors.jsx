import { createSelector } from "reselect";

const selectEstimate = (state) => state.estimate;

export const selectIsLoading = createSelector(
  [selectEstimate],
  (estimate) => estimate.isLoading
);

export const selectEstimateInputs = createSelector(
  [selectEstimate],
  (estimate) => estimate.inputs
);

export const impactEstimatedData = createSelector(
  [selectEstimateInputs],
  (inputs) => {
    // shared data
    if (inputs) {
      const { timeElapse, reportedCases, totalHospitalBeds, period } = inputs;
      let days = timeElapse;

      if (period === "days") {
        days = timeElapse;
      } else if (period === "weeks") {
        days = 7 * timeElapse;
      } else {
        days = 30 * timeElapse;
      }

      //data for impact
      const currentImpact = reportedCases * 10;
      const infecByTime_impact = currentImpact * ((1024 / 30) * days);
      const percent_impact = infecByTime_impact * 0.15;
      const bedAvailable_impact = totalHospitalBeds * 0.35;
      const hospitalBedsByRequestedImpact =
        bedAvailable_impact - percent_impact;
      const casesForICUByRequestedTime_impact = infecByTime_impact * 0.05;
      const infectionsByRequestedTime_impact = infecByTime_impact * 0.02;

      //data fro seveer cases
      const curerntSevere = reportedCases * 50;
      const infecByTime_sever = curerntSevere * ((1024 / 30) * days);
      const percent_server = infecByTime_sever * 0.15;
      const bedAvailable_severe = totalHospitalBeds * 0.35;
      const hospitalBedsByRequestedSeveer =
        bedAvailable_severe - percent_server;
      const casesForICUByRequestedTime_sever = infecByTime_sever * 0.05;
      const infectionsByRequestedTime_seveer = infecByTime_sever * 0.02;

      const useFulData = {
        impact: {
          cuurrentlyInfected: currentImpact,
          infectionsByRequestedTime: Number(infecByTime_impact.toFixed(0)),
          severeCasesByRequestedTime: Number(percent_impact.toFixed(0)),
          availableBeds: Number(bedAvailable_impact.toFixed(0)),
          hospitalBedsByRequestedImpact: Number(
            hospitalBedsByRequestedImpact.toFixed(0)
          ),
          casesForICUByRequestedTime: Number(
            casesForICUByRequestedTime_impact.toFixed(0)
          ),
          casesForVentilatorsByRequestedTime: Number(
            infectionsByRequestedTime_impact.toFixed(0)
          ),
        },
        severeImpact: {
          cuurrentlyInfected: curerntSevere,
          infectionsByRequestedTime: Number(infecByTime_sever.toFixed(0)),
          severeCasesByRequestedTime: Number(percent_server.toFixed(0)),
          availableBeds: Number(bedAvailable_severe.toFixed(0)),
          hospitalBedsByRequestedSeveer: Number(
            hospitalBedsByRequestedSeveer.toFixed(0)
          ),
          casesForICUByRequestedTime: Number(
            casesForICUByRequestedTime_sever.toFixed()
          ),
          casesForVentilatorsByRequestedTime: Number(
            infectionsByRequestedTime_seveer.toFixed(0)
          ),
        },
      };

      return {
        impact: useFulData.impact,
        severe: useFulData.severeImpact,
      };
    } else return;
  }
);
