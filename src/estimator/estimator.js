const data1 = {
  region: {
    name: "Africa",
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71,
  },

  periodType: "days",
  timeToElapse: 30,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614,
};

const covid19ImpactEstimator = (data) => {
  // shared data
  const {
    reportedCases,
    totalHospitalBeds,
    region: { avgDailyIncomeInUSD, avgDailyIncomePopulation },
    timeToElapse,
  } = data;
  const days = timeToElapse;
  const majorityPercent = avgDailyIncomePopulation;
  const erning = avgDailyIncomeInUSD;

  //data for impact
  const currentImpact = reportedCases * 10;
  const infecByTime_impact = currentImpact * ((1024 / 30) * days);
  const percent_impact = infecByTime_impact * 0.15;
  const bedAvailable_impact = totalHospitalBeds * 0.35;
  const hospitalBedsByRequestedImpact = bedAvailable_impact - percent_impact;
  const casesForICUByRequestedTime_impact = infecByTime_impact * 0.05;
  const infectionsByRequestedTime_impact = infecByTime_impact * 0.02;
  const dollarsInFlight_impact =
    infecByTime_impact * majorityPercent * erning * days;

  //data fro seveer cases
  const curerntSevere = reportedCases * 50;
  const infecByTime_sever = curerntSevere * ((1024 / 30) * days);
  const percent_server = infecByTime_sever * 0.15;
  const bedAvailable_severe = totalHospitalBeds * 0.35;
  const hospitalBedsByRequestedSeveer = bedAvailable_severe - percent_server;
  const casesForICUByRequestedTime_sever = infecByTime_sever * 0.05;
  const infectionsByRequestedTime_seveer = infecByTime_sever * 0.02;
  const dollarsInFlight_seveer =
    infecByTime_sever * majorityPercent * erning * days;

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
      dollarsInFlight: Number(dollarsInFlight_impact.toFixed(0)),
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
      dollarsInFlight: Number(dollarsInFlight_seveer.toFixed(0)),
    },
  };

  return {
    data: data,
    impact: {
      cuurrentlyInfected: useFulData.impact.cuurrentlyInfected,
      infectionsByRequestedTime: useFulData.impact.infectionsByRequestedTime,
      severeCasesByRequestedTime: useFulData.impact.severeCasesByRequestedTime,
      totalHospitalBeds: useFulData.impact.availableBeds,
      hospitalBedsByRequestedTime:
        useFulData.impact.hospitalBedsByRequestedImpact,
      casesForICUByRequestedTime: useFulData.impact.casesForICUByRequestedTime,
      casesForVentilatorsByRequestedTime:
        useFulData.impact.casesForVentilatorsByRequestedTime,
      dollarsInFlight: useFulData.impact.dollarsInFlight,
    },
    severeImpact: {
      cuurrentlyInfected: useFulData.severeImpact.cuurrentlyInfected,
      infectionsByRequestedTime:
        useFulData.severeImpact.infectionsByRequestedTime,
      severeCasesByRequestedTime:
        useFulData.severeImpact.severeCasesByRequestedTime,
      totalHospitalBeds: useFulData.severeImpact.availableBeds,
      hospitalBedsByRequestedTime:
        useFulData.severeImpact.hospitalBedsByRequestedSeveer,
      casesForICUByRequestedTime:
        useFulData.severeImpact.casesForICUByRequestedTime,
      casesForVentilatorsByRequestedTime:
        useFulData.severeImpact.casesForVentilatorsByRequestedTime,
      dollarsInFlight: useFulData.severeImpact.dollarsInFlight,
    },
  };
};

console.log(covid19ImpactEstimator(data1));
