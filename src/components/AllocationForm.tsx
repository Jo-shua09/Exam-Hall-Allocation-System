import { useState, useRef, useEffect } from "react";
import { Search, AlertCircle, CheckCircle2 } from "lucide-react";
import ResultCard from "./ResultCard";
import Loader from "./ui/loader";

interface FormData {
  academicSession: string;
  level: string;
  department: string;
  college: string;
  matricNumber: string;
}

interface FormErrors {
  academicSession?: string;
  level?: string;
  department?: string;
  college?: string;
  matricNumber?: string;
}

interface AllocationResult {
  matricNumber: string;
  studentName: string;
  department: string;
  level: string;
  hall: string;
  seatNumber: string;
  date: string;
  time: string;
  course: string;
}

const AllocationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    academicSession: "",
    level: "",
    department: "",
    college: "",
    matricNumber: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AllocationResult | null>(null);
  const [showResult, setShowResult] = useState(false);

  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    firstInputRef.current?.focus();
  }, []);

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "academicSession":
        if (!value) return "Academic session is required";
        if (!/^\d{4}\/\d{4}$/.test(value)) return "Use format: 2024/2025";
        return undefined;
      case "level":
        if (!value) return "Level is required";
        if (!/^\d{3}\s*level$/i.test(value)) return "Use format: 200 Level";
        return undefined;
      case "department":
        if (!value) return "Department is required";
        if (value.length < 3) return "Enter a valid department name";
        return undefined;
      case "college":
        if (!value) return "College is required";
        if (value.length < 5) return "Enter a valid college name";
        return undefined;
      case "matricNumber":
        if (!value) return "Matriculation number is required";
        if (!/^\d{12}$/.test(value)) return "Must be 12 digits";
        return undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    (Object.keys(formData) as Array<keyof FormData>).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched({
      academicSession: true,
      level: true,
      department: true,
      college: true,
      matricNumber: true,
    });

    return isValid;
  };

  const generateMockResult = (): AllocationResult => {
    const halls = ["TE 220", "TE 225", "TE 230", "TE 245", "TE 250", "TE 260", "TE 275", "TE 290", "TE 305", "TE 310"];
    const times = ["9:00 AM - 12:00 PM", "10:00 AM - 1:00 PM", "2:00 PM - 5:00 PM", "3:00 PM - 6:00 PM"];
    const courses = ["CSC 201", "MTH 201", "PHY 201", "CHM 201", "BIO 201", "GST 201"];

    const randomHall = halls[Math.floor(Math.random() * halls.length)];
    const randomTime = times[Math.floor(Math.random() * times.length)];
    const randomCourse = courses[Math.floor(Math.random() * courses.length)];
    const randomSeat = `${String.fromCharCode(65 + Math.floor(Math.random() * 5))}${Math.floor(Math.random() * 30) + 1}`;

    return {
      matricNumber: formData.matricNumber,
      studentName: "Student Name",
      department: formData.department,
      level: formData.level,
      hall: randomHall,
      seatNumber: randomSeat,
      date: "December 15, 2024",
      time: randomTime,
      course: randomCourse,
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setShowResult(false);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const mockResult = generateMockResult();
    setResult(mockResult);
    setIsLoading(false);
    setShowResult(true);
  };

  const handleNewSearch = () => {
    setShowResult(false);
    setResult(null);
    setFormData({
      academicSession: "",
      level: "",
      department: "",
      college: "",
      matricNumber: "",
    });
    setTouched({});
    setErrors({});
    firstInputRef.current?.focus();
  };

  const getInputClassName = (fieldName: keyof FormErrors) => {
    const baseClass = "input-styled";
    if (touched[fieldName] && errors[fieldName]) {
      return `${baseClass} border-destructive focus:border-destructive focus:ring-destructive/20`;
    }
    if (touched[fieldName] && !errors[fieldName] && formData[fieldName]) {
      return `${baseClass} border-secondary focus:border-secondary`;
    }
    return baseClass;
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {!showResult ? (
        <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 animate-scale-in">
          <div className="text-center mb-8">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-foreground mb-2">Search for Your Hall</h2>
            <p className="text-muted-foreground">Enter your details below to find your examination hall allocation</p>
          </div>

          <div className="space-y-5">
            {/* Academic Session */}
            <div className="space-y-2">
              <label htmlFor="academicSession" className="block text-sm font-medium text-foreground">
                Academic Session <span className="text-destructive">*</span>
              </label>
              <div className="relative">
                <input
                  ref={firstInputRef}
                  type="text"
                  id="academicSession"
                  name="academicSession"
                  value={formData.academicSession}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g., 2024/2025"
                  className={getInputClassName("academicSession")}
                  aria-describedby="academicSession-error"
                />
                {touched.academicSession && !errors.academicSession && formData.academicSession && (
                  <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
                )}
              </div>
              {touched.academicSession && errors.academicSession && (
                <p id="academicSession-error" className="flex items-center gap-1 text-sm text-destructive animate-fade-in">
                  <AlertCircle className="w-4 h-4" />
                  {errors.academicSession}
                </p>
              )}
            </div>

            {/* Level */}
            <div className="space-y-2">
              <label htmlFor="level" className="block text-sm font-medium text-foreground">
                Level <span className="text-destructive">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="level"
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g., 200 Level"
                  className={getInputClassName("level")}
                  aria-describedby="level-error"
                />
                {touched.level && !errors.level && formData.level && (
                  <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
                )}
              </div>
              {touched.level && errors.level && (
                <p id="level-error" className="flex items-center gap-1 text-sm text-destructive animate-fade-in">
                  <AlertCircle className="w-4 h-4" />
                  {errors.level}
                </p>
              )}
            </div>

            {/* Department */}
            <div className="space-y-2">
              <label htmlFor="department" className="block text-sm font-medium text-foreground">
                Department <span className="text-destructive">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g., Computer Science"
                  className={getInputClassName("department")}
                  aria-describedby="department-error"
                />
                {touched.department && !errors.department && formData.department && (
                  <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
                )}
              </div>
              {touched.department && errors.department && (
                <p id="department-error" className="flex items-center gap-1 text-sm text-destructive animate-fade-in">
                  <AlertCircle className="w-4 h-4" />
                  {errors.department}
                </p>
              )}
            </div>

            {/* College */}
            <div className="space-y-2">
              <label htmlFor="college" className="block text-sm font-medium text-foreground">
                College <span className="text-destructive">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="college"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g., College of Basic Science"
                  className={getInputClassName("college")}
                  aria-describedby="college-error"
                />
                {touched.college && !errors.college && formData.college && (
                  <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
                )}
              </div>
              {touched.college && errors.college && (
                <p id="college-error" className="flex items-center gap-1 text-sm text-destructive animate-fade-in">
                  <AlertCircle className="w-4 h-4" />
                  {errors.college}
                </p>
              )}
            </div>

            {/* Matriculation Number */}
            <div className="space-y-2">
              <label htmlFor="matricNumber" className="block text-sm font-medium text-foreground">
                Matriculation Number <span className="text-destructive">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="matricNumber"
                  name="matricNumber"
                  value={formData.matricNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g., 240303010071"
                  className={getInputClassName("matricNumber")}
                  aria-describedby="matricNumber-error"
                  maxLength={12}
                />
                {touched.matricNumber && !errors.matricNumber && formData.matricNumber && (
                  <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
                )}
              </div>
              {touched.matricNumber && errors.matricNumber && (
                <p id="matricNumber-error" className="flex items-center gap-1 text-sm text-destructive animate-fade-in">
                  <AlertCircle className="w-4 h-4" />
                  {errors.matricNumber}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-hero flex items-center justify-center gap-3 mt-8 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader />
                  <span>Searching...</span>
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  <span>Search for Hall</span>
                </>
              )}
            </button>
          </div>
        </form>
      ) : (
        result && <ResultCard result={result} onNewSearch={handleNewSearch} />
      )}
    </div>
  );
};

export default AllocationForm;
