import React, { useState, useEffect } from "react";
import "../styles/Calculator.css";

export default function Calculator() {
  const [tab, setTab] = useState("bmi");
  const [results, setResults] = useState({
    bmi: null,
    bmr: null,
    tdee: null,
    onerm: null,
    idealWeight: null,
    bodyFat: null,
    caloriesBurned: null,
  });

  const updateResult = (key, value) => {
    setResults((prev) => ({ ...prev, [key]: value }));
  };

  const tabs = [
    { key: "bmi", label: "BMI" },
    { key: "bmr", label: "BMR" },
    { key: "tdee", label: "TDEE" },
    { key: "onerm", label: "1RM" },
    { key: "idealWeight", label: "Ideal Weight" },
    { key: "bodyFat", label: "Body Fat %" },
    { key: "caloriesBurned", label: "Calories Burned" },
  ];

  return (
    <div className="container">
      <h1>Fitness Calculators</h1>
      <div className="tabs">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={tab === t.key ? "active" : ""}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="calculator">
        {tab === "bmi" && <BMICalculator onResult={(v) => updateResult("bmi", v)} />}
        {tab === "bmr" && <BMRCalculator onResult={(v) => updateResult("bmr", v)} />}
        {tab === "tdee" && <TDEECalculator onResult={(v) => updateResult("tdee", v)} />}
        {tab === "onerm" && <OneRMCalculator onResult={(v) => updateResult("onerm", v)} />}
        {tab === "idealWeight" && <IdealWeightCalculator onResult={(v) => updateResult("idealWeight", v)} />}
        {tab === "bodyFat" && <BodyFatCalculator onResult={(v) => updateResult("bodyFat", v)} />}
        {tab === "caloriesBurned" && <CaloriesBurnedCalculator onResult={(v) => updateResult("caloriesBurned", v)} />}
      </div>

      <div className="summary">
        <h2>Total Result Summary</h2>
        <p>BMI: {results.bmi ?? "Not Calculated"}</p>
        <p>BMR: {results.bmr ? `${results.bmr.toFixed(2)} kcal/day` : "Not Calculated"}</p>
        <p>TDEE: {results.tdee ? `${results.tdee.toFixed(2)} kcal/day` : "Not Calculated"}</p>
        <p>1RM: {results.onerm ? `${results.onerm.toFixed(2)} kg` : "Not Calculated"}</p>
        <p>Ideal Weight: {results.idealWeight ? `${results.idealWeight} kg` : "Not Calculated"}</p>
        <p>Body Fat %: {results.bodyFat ? `${results.bodyFat}%` : "Not Calculated"}</p>
        <p>Calories Burned: {results.caloriesBurned ? `${results.caloriesBurned} kcal` : "Not Calculated"}</p>
      </div>
    </div>
  );
}

// --- Individual Calculators ---

function BMICalculator({ onResult }) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const bmi = height ? (weight / ((height / 100) ** 2)).toFixed(2) : "";

  useEffect(() => {
    if (bmi) onResult(bmi);
  }, [bmi]);

  return (
    <>
      <h2>BMI Calculator</h2>
      <label>Height (cm): <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} /></label>
      <label>Weight (kg): <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} /></label>
      {bmi && <p>BMI: {bmi}</p>}
    </>
  );
}

function BMRCalculator({ onResult }) {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const bmr =
    weight && height && age
      ? gender === "male"
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161
      : "";

  useEffect(() => {
    if (bmr) onResult(bmr);
  }, [bmr]);

  return (
    <>
      <h2>BMR Calculator</h2>
      <label>Gender:
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <label>Age: <input type="number" value={age} onChange={(e) => setAge(e.target.value)} /></label>
      <label>Height (cm): <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} /></label>
      <label>Weight (kg): <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} /></label>
      {bmr && <p>BMR: {bmr.toFixed(2)} kcal/day</p>}
    </>
  );
}

function TDEECalculator({ onResult }) {
  const [bmr, setBMR] = useState("");
  const [factor, setFactor] = useState(1.2);
  const tdee = bmr ? bmr * factor : "";

  useEffect(() => {
    if (tdee) onResult(tdee);
  }, [tdee]);

  return (
    <>
      <h2>TDEE Calculator</h2>
      <label>BMR: <input type="number" value={bmr} onChange={(e) => setBMR(e.target.value)} /></label>
      <label>Activity Level:
        <select value={factor} onChange={(e) => setFactor(parseFloat(e.target.value))}>
          <option value={1.2}>Sedentary</option>
          <option value={1.375}>Lightly Active</option>
          <option value={1.55}>Moderately Active</option>
          <option value={1.725}>Very Active</option>
          <option value={1.9}>Extra Active</option>
        </select>
      </label>
      {tdee && <p>TDEE: {tdee.toFixed(2)} kcal/day</p>}
    </>
  );
}

function OneRMCalculator({ onResult }) {
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const onerm = weight && reps ? weight * (1 + 0.0333 * reps) : "";

  useEffect(() => {
    if (onerm) onResult(onerm);
  }, [onerm]);

  return (
    <>
      <h2>1 Rep Max Calculator</h2>
      <label>Weight Lifted (kg): <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} /></label>
      <label>Reps: <input type="number" value={reps} onChange={(e) => setReps(e.target.value)} /></label>
      {onerm && <p>1RM: {onerm.toFixed(2)} kg</p>}
    </>
  );
}

function IdealWeightCalculator({ onResult }) {
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("male");

  const ideal = height
    ? gender === "male"
      ? 50 + 0.91 * (height - 152.4)
      : 45.5 + 0.91 * (height - 152.4)
    : "";

  useEffect(() => {
    if (ideal) onResult(ideal.toFixed(2));
  }, [ideal]);

  return (
    <>
      <h2>Ideal Weight Calculator</h2>
      <label>Gender:
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <label>Height (cm): <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} /></label>
      {ideal && <p>Ideal Weight: {ideal.toFixed(2)} kg</p>}
    </>
  );
}

function BodyFatCalculator({ onResult }) {
  const [waist, setWaist] = useState("");
  const [neck, setNeck] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("male");

  const bf =
    waist && neck && height
      ? gender === "male"
        ? 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450
        : 0
      : "";

  useEffect(() => {
    if (bf) onResult(bf.toFixed(2));
  }, [bf]);

  return (
    <>
      <h2>Body Fat % Calculator</h2>
      <label>Gender:
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
        </select>
      </label>
      <label>Waist (cm): <input type="number" value={waist} onChange={(e) => setWaist(e.target.value)} /></label>
      <label>Neck (cm): <input type="number" value={neck} onChange={(e) => setNeck(e.target.value)} /></label>
      <label>Height (cm): <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} /></label>
      {bf && <p>Body Fat: {bf.toFixed(2)}%</p>}
    </>
  );
}

function CaloriesBurnedCalculator({ onResult }) {
  const [weight, setWeight] = useState("");
  const [duration, setDuration] = useState("");
  const [met, setMet] = useState(8); // Default: moderate running

  const calories = weight && duration && met
    ? (met * 3.5 * weight / 200) * duration
    : "";

  useEffect(() => {
    if (calories) onResult(calories.toFixed(2));
  }, [calories]);

  return (
    <>
      <h2>Calories Burned Calculator</h2>
      <label>Weight (kg): <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} /></label>
      <label>Duration (min): <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} /></label>
      <label>Activity MET:
        <select value={met} onChange={(e) => setMet(parseFloat(e.target.value))}>
          <option value={3.5}>Walking (3.5)</option>
          <option value={8}>Running (8)</option>
          <option value={6}>Cycling (6)</option>
          <option value={10}>Swimming (10)</option>
        </select>
      </label>
      {calories && <p>Calories Burned: {calories.toFixed(2)} kcal</p>}
    </>
  );
}
