import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import SkillTest from '../components/SkillTest';
import ComparisonGraph from '../components/ComparisonGraph';
import SyllabusAnalysis from '../components/SyllabusAnalysis';
import QuestionAnalysis from '../components/QuestionAnalysis';

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <div className="flex-1 ml-64"> {/* Ensure Sidebar has width (adjust `ml-64` if needed) */}
        <Header />
        <main className="p-4 pt-24 grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8">
            <SkillTest />
            <ComparisonGraph />
          </div>

          {/* Second Column (30% width for analysis components) */}
          <div className="col-span-12 md:col-span-4">
            <SyllabusAnalysis />
            <QuestionAnalysis />
          </div>
        </main>
      </div>
    </div>
  );
}
