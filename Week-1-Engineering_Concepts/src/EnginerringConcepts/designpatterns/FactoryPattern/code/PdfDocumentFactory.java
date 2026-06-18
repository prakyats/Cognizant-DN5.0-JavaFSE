package EnginerringConcepts.designpatterns.FactoryPattern.code;

public class PdfDocumentFactory extends DocumentFactory {

    @Override
    public Document createDocument() {
        return new PdfDocument();
    }
}
