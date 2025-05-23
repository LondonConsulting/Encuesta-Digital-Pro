import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { RadarChartData } from './survey-radar-chart';

// Definir estilos para el PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30,
  },
  header: {
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  logo: {
    width: 180,
    height: 'auto',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#000000',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 15,
    color: '#333333',
    textAlign: 'center',
  },
  companyInfo: {
    fontSize: 14,
    marginBottom: 20,
    color: '#666666',
    textAlign: 'center',
  },
  analysisTitle: {
    fontSize: 20,
    marginBottom: 15,
    color: '#000000',
    borderBottom: 1,
    paddingBottom: 5,
  },
  analysisText: {
    fontSize: 12,
    marginBottom: 20,
    color: '#333333',
    lineHeight: 1.5,
    textAlign: 'justify',
  },
  boldText: {
    fontFamily: 'Helvetica-Bold',
  },
  scoresSection: {
    marginTop: 30,
  },
  scoresSectionTitle: {
    fontSize: 18,
    marginBottom: 15,
    color: '#000000',
    textAlign: 'center',
  },
  pilarSection: {
    margin: 10,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
  },
  pilarTitle: {
    fontSize: 16,
    marginBottom: 10,
    color: '#000000',
  },
  scoreRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    padding: 5,
  },
  categoryLabel: {
    fontSize: 11,
    color: '#333333',
    flex: 1,
  },
  scoreValue: {
    fontSize: 11,
    color: '#000000',
    width: 50,
    textAlign: 'right',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: 'center',
    color: '#666666',
    fontSize: 10,
  },
});

interface SurveyPDFProps {
  data: {
    pilarName: string;
    average: number;
    categories: Array<{
      label: string;
      value: number;
    }>;
  }[];
  reportText: string;
  companyName?: string;
  userName?: string;
}

export const SurveyPDF = ({ data, reportText, companyName, userName }: SurveyPDFProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header con logo */}
      <View style={styles.header}>
        <Image 
          src="/london-consulting-group-logo.png"
          style={styles.logo}
        />
      </View>

      {/* Título y datos de la empresa */}
      <Text style={styles.title}>Reporte de Madurez Digital</Text>
      {companyName && userName && (
        <Text style={styles.companyInfo}>
          {companyName} - {userName}
        </Text>
      )}

      {/* Análisis de IA */}
      <Text style={styles.analysisTitle}>Análisis Detallado</Text>
      <Text style={styles.analysisText}>
        {reportText.split(/(\*\*.*?\*\*)/).map((part, index) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return (
              <Text key={index} style={styles.boldText}>
                {part.slice(2, -2)}
              </Text>
            );
          }
          return part;
        })}
      </Text>

      {/* Sección de puntuaciones */}
      <View style={styles.scoresSection}>
        <Text style={styles.scoresSectionTitle}>Resultados por Pilar</Text>
        {data.map((pilar, index) => (
          <View key={index} style={styles.pilarSection}>
            <Text style={styles.pilarTitle}>
              {pilar.pilarName} - Promedio: {pilar.average.toFixed(2)}
            </Text>
            {pilar.categories.map((category, catIndex) => (
              <View key={catIndex} style={styles.scoreRow}>
                <Text style={styles.categoryLabel}>{category.label}</Text>
                <Text style={styles.scoreValue}>{category.value.toFixed(2)}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>

      {/* Footer */}
      <Text style={styles.footer}>
        © {new Date().getFullYear()} London Consulting Group - Reporte generado automáticamente
      </Text>
    </Page>
  </Document>
); 