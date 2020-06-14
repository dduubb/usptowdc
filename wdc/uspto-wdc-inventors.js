/*global tableau,document, $*/
(function () {
  "use strict";
  var myConnector = tableau.makeConnector(),
    clusterLookup = {
      "A01B": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A01C": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A01D": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A01F": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A01G": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A01H": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A01J": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A01K": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A01L": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A01M": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A01N": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A01P": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A01R": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A01V": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A01W": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A04B": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A04M": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A12C": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A12N": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A16K": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A16L": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A17C": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A21B": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A21C": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A21D": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A21H": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A22B": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A22C": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A22G": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A23B": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A23C": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A23D": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A23F": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A23G": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A23J": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A23K": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A23L": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A23N": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A23P": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A24B": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A24C": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A24D": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "A24F": {
        "Cluster": "Generic Manufacturing"
      },
      "A24G": {
        "Cluster": "Generic Manufacturing"
      },
      "A25D": {
        "Cluster": "Generic Manufacturing"
      },
      "A26K": {
        "Cluster": "Generic Manufacturing"
      },
      "A27B": {
        "Cluster": "Generic Manufacturing"
      },
      "A27C": {
        "Cluster": "Generic Manufacturing"
      },
      "A32D": {
        "Cluster": "Generic Manufacturing"
      },
      "A41B": {
        "Cluster": "Apparel and Textiles"
      },
      "A41C": {
        "Cluster": "Apparel and Textiles"
      },
      "A41D": {
        "Cluster": "Apparel and Textiles"
      },
      "A41F": {
        "Cluster": "Apparel and Textiles"
      },
      "A41G": {
        "Cluster": "Apparel and Textiles"
      },
      "A41H": {
        "Cluster": "Apparel and Textiles"
      },
      "A41J": {
        "Cluster": "Apparel and Textiles"
      },
      "A41L": {
        "Cluster": "Apparel and Textiles"
      },
      "A42B": {
        "Cluster": "Apparel and Textiles"
      },
      "A42C": {
        "Cluster": "Apparel and Textiles"
      },
      "A42D": {
        "Cluster": "Apparel and Textiles"
      },
      "A42F": {
        "Cluster": "Apparel and Textiles"
      },
      "A43B": {
        "Cluster": "Apparel and Textiles"
      },
      "A43C": {
        "Cluster": "Apparel and Textiles"
      },
      "A43D": {
        "Cluster": "Apparel and Textiles"
      },
      "A44B": {
        "Cluster": "Apparel and Textiles"
      },
      "A44C": {
        "Cluster": "Apparel and Textiles"
      },
      "A44G": {
        "Cluster": "Apparel and Textiles"
      },
      "A45A": {
        "Cluster": "Apparel and Textiles"
      },
      "A45B": {
        "Cluster": "Apparel and Textiles"
      },
      "A45C": {
        "Cluster": "Apparel and Textiles"
      },
      "A45D": {
        "Cluster": "Generic Manufacturing"
      },
      "A45F": {
        "Cluster": "Generic Manufacturing"
      },
      "A45G": {
        "Cluster": "Generic Manufacturing"
      },
      "A45L": {
        "Cluster": "Generic Manufacturing"
      },
      "A46B": {
        "Cluster": "Generic Manufacturing"
      },
      "A46D": {
        "Cluster": "Generic Manufacturing"
      },
      "A47B": {
        "Cluster": "Generic Manufacturing"
      },
      "A47C": {
        "Cluster": "Generic Manufacturing"
      },
      "A47D": {
        "Cluster": "Generic Manufacturing"
      },
      "A47F": {
        "Cluster": "Generic Manufacturing"
      },
      "A47G": {
        "Cluster": "Generic Manufacturing"
      },
      "A47H": {
        "Cluster": "Generic Manufacturing"
      },
      "A47J": {
        "Cluster": "Generic Manufacturing"
      },
      "A47K": {
        "Cluster": "Generic Manufacturing"
      },
      "A47L": {
        "Cluster": "Generic Manufacturing"
      },
      "A47R": {
        "Cluster": "Generic Manufacturing"
      },
      "A51K": {
        "Cluster": "Generic Manufacturing"
      },
      "A60P": {
        "Cluster": "Generic Manufacturing"
      },
      "A61B": {
        "Cluster": "Biomedical/Biotechnical (Life Sciences)"
      },
      "A61C": {
        "Cluster": "Biomedical/Biotechnical (Life Sciences)"
      },
      "A61D": {
        "Cluster": "Biomedical/Biotechnical (Life Sciences)"
      },
      "A61F": {
        "Cluster": "Biomedical/Biotechnical (Life Sciences)"
      },
      "A61G": {
        "Cluster": "Biomedical/Biotechnical (Life Sciences)"
      },
      "A61H": {
        "Cluster": "Biomedical/Biotechnical (Life Sciences)"
      },
      "A61J": {
        "Cluster": "Biomedical/Biotechnical (Life Sciences)"
      },
      "A61K": {
        "Cluster": "Biomedical/Biotechnical (Life Sciences)"
      },
      "A61L": {
        "Cluster": "Biomedical/Biotechnical (Life Sciences)"
      },
      "A61M": {
        "Cluster": "Biomedical/Biotechnical (Life Sciences)"
      },
      "A61N": {
        "Cluster": "Biomedical/Biotechnical (Life Sciences)"
      },
      "A61P": {
        "Cluster": "Biomedical/Biotechnical (Life Sciences)"
      },
      "A61Q": {
        "Cluster": "Biomedical/Biotechnical (Life Sciences)"
      },
      "A61R": {
        "Cluster": "Biomedical/Biotechnical (Life Sciences)"
      },
      "A61S": {
        "Cluster": "Biomedical/Biotechnical (Life Sciences)"
      },
      "A61U": {
        "Cluster": "Biomedical/Biotechnical (Life Sciences)"
      },
      "A62B": {
        "Cluster": "Biomedical/Biotechnical (Life Sciences)"
      },
      "A62C": {
        "Cluster": "Generic Manufacturing"
      },
      "A62D": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "A62G": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "A63B": {
        "Cluster": "Generic Manufacturing"
      },
      "A63C": {
        "Cluster": "Generic Manufacturing"
      },
      "A63D": {
        "Cluster": "Generic Manufacturing"
      },
      "A63F": {
        "Cluster": "Printing and Publishing"
      },
      "A63G": {
        "Cluster": "Generic Manufacturing"
      },
      "A63H": {
        "Cluster": "Generic Manufacturing"
      },
      "A63J": {
        "Cluster": "Generic Manufacturing"
      },
      "A63K": {
        "Cluster": "Generic Manufacturing"
      },
      "A63L": {
        "Cluster": "Appearal"
      },
      "A64B": {
        "Cluster": "Appearal"
      },
      "A65B": {
        "Cluster": "Appearal"
      },
      "A67F": {
        "Cluster": "Appearal"
      },
      "A71F": {
        "Cluster": "Appearal"
      },
      "A71N": {
        "Cluster": "Appearal"
      },
      "A87C": {
        "Cluster": "Appearal"
      },
      "B01B": {
        "Cluster": "Machinery Manufacturing"
      },
      "B01D": {
        "Cluster": "Machinery Manufacturing"
      },
      "B01F": {
        "Cluster": "Machinery Manufacturing"
      },
      "B01J": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "B01K": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "B01L": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "B01N": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "B02B": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "B02C": {
        "Cluster": "Machinery Manufacturing"
      },
      "B02F": {
        "Cluster": "Machinery Manufacturing"
      },
      "B02L": {
        "Cluster": "Machinery Manufacturing"
      },
      "B03B": {
        "Cluster": "Machinery Manufacturing"
      },
      "B03C": {
        "Cluster": "Machinery Manufacturing"
      },
      "B03D": {
        "Cluster": "Generic Manufacturing"
      },
      "B04B": {
        "Cluster": "Generic Manufacturing"
      },
      "B04C": {
        "Cluster": "Machinery Manufacturing"
      },
      "B05B": {
        "Cluster": "Machinery Manufacturing"
      },
      "B05C": {
        "Cluster": "Machinery Manufacturing"
      },
      "B05D": {
        "Cluster": "Machinery Manufacturing"
      },
      "B05L": {
        "Cluster": "Machinery Manufacturing"
      },
      "B06B": {
        "Cluster": "Machinery Manufacturing"
      },
      "B06G": {
        "Cluster": "Machinery Manufacturing"
      },
      "B06N": {
        "Cluster": "Machinery Manufacturing"
      },
      "B07B": {
        "Cluster": "Machinery Manufacturing"
      },
      "B07C": {
        "Cluster": "Machinery Manufacturing"
      },
      "B08B": {
        "Cluster": "Machinery Manufacturing"
      },
      "B09B": {
        "Cluster": "Mining"
      },
      "B09C": {
        "Cluster": "Mining"
      },
      "B09F": {
        "Cluster": "Mining"
      },
      "B09G": {
        "Cluster": "Mining"
      },
      "B10F": {
        "Cluster": "Mining"
      },
      "B10K": {
        "Cluster": "Mining"
      },
      "B10L": {
        "Cluster": "Mining"
      },
      "B12D": {
        "Cluster": "Mining"
      },
      "B21B": {
        "Cluster": "Primary Metal Manufacturing"
      },
      "B21C": {
        "Cluster": "Primary Metal Manufacturing"
      },
      "B21D": {
        "Cluster": "Primary Metal Manufacturing"
      },
      "B21F": {
        "Cluster": "Primary Metal Manufacturing"
      },
      "B21H": {
        "Cluster": "Primary Metal Manufacturing"
      },
      "B21J": {
        "Cluster": "Primary Metal Manufacturing"
      },
      "B21K": {
        "Cluster": "Primary Metal Manufacturing"
      },
      "B21L": {
        "Cluster": "Fabricated Metal Product Manufacturing"
      },
      "B22B": {
        "Cluster": "Fabricated Metal Product Manufacturing"
      },
      "B22C": {
        "Cluster": "Fabricated Metal Product Manufacturing"
      },
      "B22D": {
        "Cluster": "Primary Metal Manufacturing"
      },
      "B22F": {
        "Cluster": "Primary Metal Manufacturing"
      },
      "B23B": {
        "Cluster": "Fabricated Metal Product Manufacturing"
      },
      "B23C": {
        "Cluster": "Fabricated Metal Product Manufacturing"
      },
      "B23D": {
        "Cluster": "Primary Metal Manufacturing"
      },
      "B23F": {
        "Cluster": "Fabricated Metal Product Manufacturing"
      },
      "B23G": {
        "Cluster": "Fabricated Metal Product Manufacturing"
      },
      "B23H": {
        "Cluster": "Primary Metal Manufacturing"
      },
      "B23K": {
        "Cluster": "Fabricated Metal Product Manufacturing"
      },
      "B23L": {
        "Cluster": "Machinery Manufacturing"
      },
      "B23P": {
        "Cluster": "Machinery Manufacturing"
      },
      "B23Q": {
        "Cluster": "Machinery Manufacturing"
      },
      "B24B": {
        "Cluster": "Machinery Manufacturing"
      },
      "B24C": {
        "Cluster": "Fabricated Metal Product Manufacturing"
      },
      "B24D": {
        "Cluster": "Fabricated Metal Product Manufacturing"
      },
      "B24P": {
        "Cluster": "Fabricated Metal Product Manufacturing"
      },
      "B25B": {
        "Cluster": "Fabricated Metal Product Manufacturing"
      },
      "B25C": {
        "Cluster": "Fabricated Metal Product Manufacturing"
      },
      "B25D": {
        "Cluster": "Machinery Manufacturing"
      },
      "B25F": {
        "Cluster": "Machinery Manufacturing"
      },
      "B25G": {
        "Cluster": "Machinery Manufacturing"
      },
      "B25H": {
        "Cluster": "Machinery Manufacturing"
      },
      "B25J": {
        "Cluster": "Machinery Manufacturing"
      },
      "B25P": {
        "Cluster": "Transportatonhh"
      },
      "B26B": {
        "Cluster": "Fabricated Metal Product Manufacturing"
      },
      "B26D": {
        "Cluster": "Machinery Manufacturing"
      },
      "B26F": {
        "Cluster": "Fabricated Metal Product Manufacturing"
      },
      "B27B": {
        "Cluster": "Forest and Wood Products"
      },
      "B27C": {
        "Cluster": "Machinery Manufacturing"
      },
      "B27F": {
        "Cluster": "Forest and Wood Products"
      },
      "B27G": {
        "Cluster": "Machinery Manufacturing"
      },
      "B27H": {
        "Cluster": "Forest and Wood Products"
      },
      "B27J": {
        "Cluster": "Machinery Manufacturing"
      },
      "B27K": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "B27L": {
        "Cluster": "Forest and Wood Products"
      },
      "B27M": {
        "Cluster": "Forest and Wood Products"
      },
      "B27N": {
        "Cluster": "Forest and Wood Products"
      },
      "B28B": {
        "Cluster": "Machinery Manufacturing"
      },
      "B28C": {
        "Cluster": "Machinery Manufacturing"
      },
      "B28D": {
        "Cluster": "Mining"
      },
      "B28H": {
        "Cluster": "Generic Manufacturing"
      },
      "B29B": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "B29C": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "B29D": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "B29F": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "B29G": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B29H": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B29J": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B29L": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "B30B": {
        "Cluster": "Machinery Manufacturing"
      },
      "B31B": {
        "Cluster": "Printing and Publishing"
      },
      "B31C": {
        "Cluster": "Printing and Publishing"
      },
      "B31D": {
        "Cluster": "Printing and Publishing"
      },
      "B31F": {
        "Cluster": "Machinery Manufacturing"
      },
      "B32B": {
        "Cluster": "Construction Products and Services"
      },
      "B37B": {
        "Cluster": "Generic Manufacturing"
      },
      "B41B": {
        "Cluster": "Printing and Publishing"
      },
      "B41C": {
        "Cluster": "Printing and Publishing"
      },
      "B41D": {
        "Cluster": "Printing and Publishing"
      },
      "B41E": {
        "Cluster": "Printing and Publishing"
      },
      "B41F": {
        "Cluster": "Printing and Publishing"
      },
      "B41J": {
        "Cluster": "Printing and Publishing"
      },
      "B41K": {
        "Cluster": "Machinery Manufacturing"
      },
      "B41L": {
        "Cluster": "Printing and Publishing"
      },
      "B41M": {
        "Cluster": "Printing and Publishing"
      },
      "B41N": {
        "Cluster": "Printing and Publishing"
      },
      "B42B": {
        "Cluster": "Construction Products and Services"
      },
      "B42C": {
        "Cluster": "Printing and Publishing"
      },
      "B42D": {
        "Cluster": "Printing and Publishing"
      },
      "B42F": {
        "Cluster": "Printing and Publishing"
      },
      "B43K": {
        "Cluster": "Printing and Publishing"
      },
      "B43L": {
        "Cluster": "Printing and Publishing"
      },
      "B43M": {
        "Cluster": "Printing and Publishing"
      },
      "B44B": {
        "Cluster": "Arts, Entertainment, Recreation and Visitor Industries"
      },
      "B44C": {
        "Cluster": "Arts, Entertainment, Recreation and Visitor Industries"
      },
      "B44D": {
        "Cluster": "Printing and Publishing"
      },
      "B44F": {
        "Cluster": "Arts, Entertainment, Recreation and Visitor Industries"
      },
      "B47K": {
        "Cluster": "Generic Manufacturing"
      },
      "B49B": {
        "Cluster": "Generic Manufacturing"
      },
      "B51B": {
        "Cluster": "Generic Manufacturing"
      },
      "B56D": {
        "Cluster": "Generic Manufacturing"
      },
      "B60B": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B60C": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B60D": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B60F": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B60G": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B60H": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B60J": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B60K": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B60L": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B60M": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B60N": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B60P": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B60Q": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B60R": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B60S": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B60T": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B60V": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B60W": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B61B": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B61C": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B61D": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B61F": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B61G": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B61H": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B61J": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B61K": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B61L": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B62B": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B62D": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B62H": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B62J": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B62K": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B62L": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B62M": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B62O": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B63B": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B63C": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B63D": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B63F": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B63G": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B63H": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B64B": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B64C": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B64D": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B64F": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B64G": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B64H": {
        "Cluster": "Machinery Manufacturing"
      },
      "B65A": {
        "Cluster": "Machinery Manufacturing"
      },
      "B65B": {
        "Cluster": "Machinery Manufacturing"
      },
      "B65C": {
        "Cluster": "Machinery Manufacturing"
      },
      "B65D": {
        "Cluster": "Construction Products and Services"
      },
      "B65F": {
        "Cluster": "Mining"
      },
      "B65G": {
        "Cluster": "Transportation and Logistics"
      },
      "B65H": {
        "Cluster": "Machinery Manufacturing"
      },
      "B65J": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "B66B": {
        "Cluster": "Machinery Manufacturing"
      },
      "B66C": {
        "Cluster": "Machinery Manufacturing"
      },
      "B66D": {
        "Cluster": "Machinery Manufacturing"
      },
      "B66F": {
        "Cluster": "Machinery Manufacturing"
      },
      "B67B": {
        "Cluster": "Machinery Manufacturing"
      },
      "B67C": {
        "Cluster": "Machinery Manufacturing"
      },
      "B67D": {
        "Cluster": "Transportation and Logistics"
      },
      "B67F": {
        "Cluster": "Transportation and Logistics"
      },
      "B68B": {
        "Cluster": "Generic Manufacturing"
      },
      "B68C": {
        "Cluster": "Machinery Manufacturing"
      },
      "B68D": {
        "Cluster": "Machinery Manufacturing"
      },
      "B68G": {
        "Cluster": "Apparel and Textiles"
      },
      "B81B": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "B82Y": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "C00F": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C00K": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C01B": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C01C": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C01D": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C01F": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C01G": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C01H": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C01L": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C01N": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C01S": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C02B": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C02C": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C02D": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C02F": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C03B": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "C03C": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C03H": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C04B": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C04C": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C04F": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C05B": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C05C": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C05D": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C05F": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C05G": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C06B": {
        "Cluster": "Defense and Security"
      },
      "C06C": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C06D": {
        "Cluster": "Defense and Security"
      },
      "C06F": {
        "Cluster": "Generic Manufacturing"
      },
      "C06G": {
        "Cluster": "Defense and Security"
      },
      "C06K": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "C06Q": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "C07B": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C07C": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C07D": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C07F": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C07G": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C07H": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C07J": {
        "Cluster": "Biomedical/Biotechnical (Life Sciences)"
      },
      "C07K": {
        "Cluster": "Biomedical/Biotechnical (Life Sciences)"
      },
      "C07L": {
        "Cluster": "Biomedical/Biotechnical (Life Sciences)"
      },
      "C07R": {
        "Cluster": "Biomedical/Biotechnical (Life Sciences)"
      },
      "C08B": {
        "Cluster": "Biomedical/Biotechnical (Life Sciences)"
      },
      "C08C": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C08D": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C08F": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C08G": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C08H": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C08J": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C08K": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C08L": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C08N": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C09B": {
        "Cluster": "Biomedical/Biotechnical (Life Sciences)"
      },
      "C09C": {
        "Cluster": "Biomedical/Biotechnical (Life Sciences)"
      },
      "C09D": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C09F": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C09G": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C09H": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C09J": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C09K": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C09L": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C10B": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C10C": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C10G": {
        "Cluster": "Energy (Fossil and Renewable)"
      },
      "C10J": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C10K": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C10L": {
        "Cluster": "Energy (Fossil and Renewable)"
      },
      "C10m": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C11B": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C11C": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C11D": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C12B": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C12C": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "C12D": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "C12G": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "C12H": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "C12K": {
        "Cluster": "Biomedical/Biotechnical (Life Sciences)"
      },
      "C12M": {
        "Cluster": "Biomedical/Biotechnical (Life Sciences)"
      },
      "C12N": {
        "Cluster": "Biomedical/Biotechnical (Life Sciences)"
      },
      "C12P": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C12Q": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "C12R": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C12S": {
        "Cluster": "Biomedical/Biotechnical (Life Sciences)"
      },
      "C12W": {
        "Cluster": "Biomedical/Biotechnical (Life Sciences)"
      },
      "C13D": {
        "Cluster": "Biomedical/Biotechnical (Life Sciences)"
      },
      "C13G": {
        "Cluster": "Biomedical/Biotechnical (Life Sciences)"
      },
      "C13K": {
        "Cluster": "Biomedical/Biotechnical (Life Sciences)"
      },
      "C13L": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C14B": {
        "Cluster": "Apparel and Textiles"
      },
      "C14C": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C14M": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C17B": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C17N": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C21B": {
        "Cluster": "Primary Metal Manufacturing"
      },
      "C21C": {
        "Cluster": "Primary Metal Manufacturing"
      },
      "C21D": {
        "Cluster": "Primary Metal Manufacturing"
      },
      "C21P": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "C22B": {
        "Cluster": "Primary Metal Manufacturing"
      },
      "C22C": {
        "Cluster": "Primary Metal Manufacturing"
      },
      "C22D": {
        "Cluster": "Primary Metal Manufacturing"
      },
      "C22F": {
        "Cluster": "Primary Metal Manufacturing"
      },
      "C22N": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "C23C": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C23F": {
        "Cluster": "Primary Metal Manufacturing"
      },
      "C23G": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C23N": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C25B": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C25C": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C25D": {
        "Cluster": "Generic Manufacturing"
      },
      "C25F": {
        "Cluster": "Generic Manufacturing"
      },
      "C30B": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "C38L": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "C40B": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "C97C": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "CO7F": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "D0101": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "D0106": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "D01D": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "D01F": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D01G": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D01H": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D01N": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0201": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0202": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0203": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0204": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0205": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0206": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0207": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0299": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D02G": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D02J": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0301": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0302": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0303": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0304": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0399": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D03D": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D03J": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0401": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0402": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0404": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D04B": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D04D": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D04H": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0502": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0505": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0506": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D05B": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D05C": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0601": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0602": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0603": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0604": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0605": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0606": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0607": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0608": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0609": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0610": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0613": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0699": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D06B": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D06C": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D06F": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D06H": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D06L": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D06M": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D06N": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D06P": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D06Q": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0701": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0702": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0703": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0704": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0705": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0706": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0707": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0708": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0799": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D07B": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0801": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0802": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0803": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0804": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0805": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0806": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0807": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0808": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0809": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D083": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0898": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0901": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0902": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0903": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0905": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0907": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0908": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0909": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D0999": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1001": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1002": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1003": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1004": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1005": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1006": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1007": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1101": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1102": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1103": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1104": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1105": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1202": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1205": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1206": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1207": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1208": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1210": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1211": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1212": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1213": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1214": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1216": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1299": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D12C": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1301": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1302": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1303": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1399": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1401": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1402": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1403": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1499": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1501": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1502": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1503": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1504": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1505": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1506": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1507": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1508": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1509": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1599": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1601": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1602": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1605": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1606": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1703": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1801": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1802": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1803": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1901": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1902": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1904": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1906": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1907": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1908": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D1999": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2001": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2002": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2003": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2099": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2101": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2102": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2103": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2104": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2199": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D21B": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D21C": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D21D": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D21F": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D21H": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2201": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2202": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2203": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2205": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2206": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2301": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2302": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2303": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2304": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2399": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2401": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2402": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2403": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2404": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2499": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2501": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2502": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2503": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2504": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2599": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D25C": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2601": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2602": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2603": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2604": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2605": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2606": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2699": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2702": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2703": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2706": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2801": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2802": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2803": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2804": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2899": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D2902": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D3001": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D3002": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D3003": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D3004": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D3006": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D3099": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D3100": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D47C": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D60T": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D65D": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "D9900": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "E01B": {
        "Cluster": "Mining"
      },
      "E01C": {
        "Cluster": "Mining"
      },
      "E01D": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "E01F": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "E01H": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "E02B": {
        "Cluster": "Machinery Manufacturing"
      },
      "E02C": {
        "Cluster": "Machinery Manufacturing"
      },
      "E02D": {
        "Cluster": "Mining"
      },
      "E02E": {
        "Cluster": "Mining"
      },
      "E02F": {
        "Cluster": "Mining"
      },
      "E03B": {
        "Cluster": "Mining"
      },
      "E03C": {
        "Cluster": "Mining"
      },
      "E03D": {
        "Cluster": "Generic Manufacturing"
      },
      "E03F": {
        "Cluster": "Biomedical/Biotechnical (Life Sciences)"
      },
      "E04B": {
        "Cluster": "Construction Products and Services"
      },
      "E04C": {
        "Cluster": "Generic Manufacturing"
      },
      "E04D": {
        "Cluster": "Generic Manufacturing"
      },
      "E04E": {
        "Cluster": "Generic Manufacturing"
      },
      "E04F": {
        "Cluster": "Generic Manufacturing"
      },
      "E04G": {
        "Cluster": "Generic Manufacturing"
      },
      "E04H": {
        "Cluster": "Generic Manufacturing"
      },
      "E05B": {
        "Cluster": "Generic Manufacturing"
      },
      "E05C": {
        "Cluster": "Fabricated Metal Product Manufacturing"
      },
      "E05D": {
        "Cluster": "Fabricated Metal Product Manufacturing"
      },
      "E05F": {
        "Cluster": "Fabricated Metal Product Manufacturing"
      },
      "E05G": {
        "Cluster": "Fabricated Metal Product Manufacturing"
      },
      "E06B": {
        "Cluster": "Fabricated Metal Product Manufacturing"
      },
      "E06C": {
        "Cluster": "Fabricated Metal Product Manufacturing"
      },
      "E20D": {
        "Cluster": "Fabricated Metal Product Manufacturing"
      },
      "E21B": {
        "Cluster": "Mining"
      },
      "E21C": {
        "Cluster": "Mining"
      },
      "E21D": {
        "Cluster": "Mining"
      },
      "E21F": {
        "Cluster": "Defense and Security"
      },
      "E25B": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "F01B": {
        "Cluster": "Machinery Manufacturing"
      },
      "F01C": {
        "Cluster": "Machinery Manufacturing"
      },
      "F01D": {
        "Cluster": "Machinery Manufacturing"
      },
      "F01G": {
        "Cluster": "Machinery Manufacturing"
      },
      "F01K": {
        "Cluster": "Machinery Manufacturing"
      },
      "F01L": {
        "Cluster": "Machinery Manufacturing"
      },
      "F01M": {
        "Cluster": "Machinery Manufacturing"
      },
      "F01N": {
        "Cluster": "Machinery Manufacturing"
      },
      "F01P": {
        "Cluster": "Machinery Manufacturing"
      },
      "F02B": {
        "Cluster": "Machinery Manufacturing"
      },
      "F02C": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "F02D": {
        "Cluster": "Machinery Manufacturing"
      },
      "F02F": {
        "Cluster": "Machinery Manufacturing"
      },
      "F02G": {
        "Cluster": "Machinery Manufacturing"
      },
      "F02K": {
        "Cluster": "Transportation Equipment Manufacturing"
      },
      "F02M": {
        "Cluster": "Machinery Manufacturing"
      },
      "F02N": {
        "Cluster": "Machinery Manufacturing"
      },
      "F02P": {
        "Cluster": "Machinery Manufacturing"
      },
      "F03B": {
        "Cluster": "Machinery Manufacturing"
      },
      "F03C": {
        "Cluster": "Machinery Manufacturing"
      },
      "F03D": {
        "Cluster": "Machinery Manufacturing"
      },
      "F03G": {
        "Cluster": "Machinery Manufacturing"
      },
      "F03H": {
        "Cluster": "Machinery Manufacturing"
      },
      "F04B": {
        "Cluster": "Machinery Manufacturing"
      },
      "F04C": {
        "Cluster": "Machinery Manufacturing"
      },
      "F04D": {
        "Cluster": "Machinery Manufacturing"
      },
      "F04E": {
        "Cluster": "Machinery Manufacturing"
      },
      "F04F": {
        "Cluster": "Machinery Manufacturing"
      },
      "F04G": {
        "Cluster": "Machinery Manufacturing"
      },
      "F05C": {
        "Cluster": "Machinery Manufacturing"
      },
      "F10H": {
        "Cluster": "Machinery Manufacturing"
      },
      "F10L": {
        "Cluster": "Machinery Manufacturing"
      },
      "F12V": {
        "Cluster": "Machinery Manufacturing"
      },
      "F15B": {
        "Cluster": "Machinery Manufacturing"
      },
      "F15C": {
        "Cluster": "Computer and Electronic Product Manufacturing"
      },
      "F15D": {
        "Cluster": "Machinery Manufacturing"
      },
      "F16B": {
        "Cluster": "Construction Products and Services"
      },
      "F16C": {
        "Cluster": "Fabricated Metal Product Manufacturing"
      },
      "F16D": {
        "Cluster": "Fabricated Metal Product Manufacturing"
      },
      "F16F": {
        "Cluster": "Machinery Manufacturing"
      },
      "F16G": {
        "Cluster": "Generic Manufacturing"
      },
      "F16H": {
        "Cluster": "Fabricated Metal Product Manufacturing"
      },
      "F16J": {
        "Cluster": "Fabricated Metal Product Manufacturing"
      },
      "F16K": {
        "Cluster": "Fabricated Metal Product Manufacturing"
      },
      "F16L": {
        "Cluster": "Fabricated Metal Product Manufacturing"
      },
      "F16M": {
        "Cluster": "Fabricated Metal Product Manufacturing"
      },
      "F16N": {
        "Cluster": "Machinery Manufacturing"
      },
      "F16P": {
        "Cluster": "Defense and Security"
      },
      "F16S": {
        "Cluster": "Construction Products and Services"
      },
      "F16T": {
        "Cluster": "Machinery Manufacturing"
      },
      "F17B": {
        "Cluster": "Machinery Manufacturing"
      },
      "F17C": {
        "Cluster": "Machinery Manufacturing"
      },
      "F17D": {
        "Cluster": "Machinery Manufacturing"
      },
      "F17G": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "F17L": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "F21B": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "F21C": {
        "Cluster": "Machinery Manufacturing"
      },
      "F21H": {
        "Cluster": "Machinery Manufacturing"
      },
      "F21J": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "F21K": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "F21L": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "F21M": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "F21N": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "F21P": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "F21S": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "F21V": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "F21W": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "F21Y": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "F22B": {
        "Cluster": "Machinery Manufacturing"
      },
      "F22D": {
        "Cluster": "Machinery Manufacturing"
      },
      "F22G": {
        "Cluster": "Machinery Manufacturing"
      },
      "F23B": {
        "Cluster": "Machinery Manufacturing"
      },
      "F23C": {
        "Cluster": "Machinery Manufacturing"
      },
      "F23D": {
        "Cluster": "Machinery Manufacturing"
      },
      "F23G": {
        "Cluster": "Machinery Manufacturing"
      },
      "F23H": {
        "Cluster": "Fabricated Metal Product Manufacturing"
      },
      "F23J": {
        "Cluster": "Machinery Manufacturing"
      },
      "F23K": {
        "Cluster": "Machinery Manufacturing"
      },
      "F23L": {
        "Cluster": "Machinery Manufacturing"
      },
      "F23M": {
        "Cluster": "Machinery Manufacturing"
      },
      "F23N": {
        "Cluster": "Machinery Manufacturing"
      },
      "F23Q": {
        "Cluster": "Machinery Manufacturing"
      },
      "F24B": {
        "Cluster": "Machinery Manufacturing"
      },
      "F24C": {
        "Cluster": "Machinery Manufacturing"
      },
      "F24D": {
        "Cluster": "Machinery Manufacturing"
      },
      "F24F": {
        "Cluster": "Machinery Manufacturing"
      },
      "F24H": {
        "Cluster": "Machinery Manufacturing"
      },
      "F24J": {
        "Cluster": "Machinery Manufacturing"
      },
      "F24M": {
        "Cluster": "Machinery Manufacturing"
      },
      "F25B": {
        "Cluster": "Machinery Manufacturing"
      },
      "F25C": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "F25D": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "F25J": {
        "Cluster": "Machinery Manufacturing"
      },
      "F26B": {
        "Cluster": "Machinery Manufacturing"
      },
      "F27B": {
        "Cluster": "Machinery Manufacturing"
      },
      "F27D": {
        "Cluster": "Machinery Manufacturing"
      },
      "F28B": {
        "Cluster": "Machinery Manufacturing"
      },
      "F28C": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "F28D": {
        "Cluster": "Machinery Manufacturing"
      },
      "F28E": {
        "Cluster": "Machinery Manufacturing"
      },
      "F28F": {
        "Cluster": "Machinery Manufacturing"
      },
      "F28G": {
        "Cluster": "Machinery Manufacturing"
      },
      "F29B": {
        "Cluster": "Machinery Manufacturing"
      },
      "F31V": {
        "Cluster": "Machinery Manufacturing"
      },
      "F41A": {
        "Cluster": "Machinery Manufacturing"
      },
      "F41B": {
        "Cluster": "Defense and Security"
      },
      "F41C": {
        "Cluster": "Defense and Security"
      },
      "F41D": {
        "Cluster": "Defense and Security"
      },
      "F41F": {
        "Cluster": "Defense and Security"
      },
      "F41G": {
        "Cluster": "Defense and Security"
      },
      "F41H": {
        "Cluster": "Defense and Security"
      },
      "F41J": {
        "Cluster": "Defense and Security"
      },
      "F42B": {
        "Cluster": "Defense and Security"
      },
      "F42C": {
        "Cluster": "Defense and Security"
      },
      "F42D": {
        "Cluster": "Mining"
      },
      "F60D": {
        "Cluster": "Generic Manufacturing"
      },
      "F61F": {
        "Cluster": "Generic Manufacturing"
      },
      "F65D": {
        "Cluster": "Generic Manufacturing"
      },
      "F65G": {
        "Cluster": "Generic Manufacturing"
      },
      "F91C": {
        "Cluster": "Defense and Security"
      },
      "G01B": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "G01C": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "G01D": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "G01F": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "G01G": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "G01H": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "G01J": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "G01K": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "G01L": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "G01M": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "G01N": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "G01P": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "G01Q": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "G01R": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "G01S": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "G01T": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "G01V": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "G01W": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "G02B": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "G02C": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "G02F": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "G02G": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "G02S": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "G03B": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "G03C": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "G03D": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "G03F": {
        "Cluster": "Printing and Publishing"
      },
      "G03G": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "G03H": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "G04B": {
        "Cluster": "Machinery Manufacturing"
      },
      "G04C": {
        "Cluster": "Machinery Manufacturing"
      },
      "G04F": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "G04G": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "G05B": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "G05D": {
        "Cluster": "Machinery Manufacturing"
      },
      "G05F": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "G05G": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "G05R": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "G06C": {
        "Cluster": "Computer and Electronic Product Manufacturing"
      },
      "G06E": {
        "Cluster": "Computer and Electronic Product Manufacturing"
      },
      "G06F": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "G06G": {
        "Cluster": "Computer and Electronic Product Manufacturing"
      },
      "G06J": {
        "Cluster": "Computer and Electronic Product Manufacturing"
      },
      "G06K": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "G06L": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "G06M": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "G06N": {
        "Cluster": "Computer and Electronic Product Manufacturing"
      },
      "G06P": {
        "Cluster": "Computer and Electronic Product Manufacturing"
      },
      "G06Q": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "G06T": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "G07B": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "G07C": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "G07D": {
        "Cluster": "Machinery Manufacturing"
      },
      "G07F": {
        "Cluster": "Machinery Manufacturing"
      },
      "G07G": {
        "Cluster": "Machinery Manufacturing"
      },
      "G07K": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "G08B": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "G08C": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "G08F": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "G08G": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "G08L": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "G09B": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "G09C": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "G09D": {
        "Cluster": "Printing and Publishing"
      },
      "G09F": {
        "Cluster": "Printing and Publishing"
      },
      "G09G": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "G10B": {
        "Cluster": "Generic Manufacturing"
      },
      "G10C": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "G10D": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "G10F": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "G10G": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "G10H": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "G10K": {
        "Cluster": "Non-Metal Product Manufacturing"
      },
      "G10L": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "G11B": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "G11C": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "G12B": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "G12P": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "G21B": {
        "Cluster": "Energy (Fossil and Renewable)"
      },
      "G21C": {
        "Cluster": "Energy (Fossil and Renewable)"
      },
      "G21F": {
        "Cluster": "Energy (Fossil and Renewable)"
      },
      "G21G": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "G21H": {
        "Cluster": "Energy (Fossil and Renewable)"
      },
      "G21K": {
        "Cluster": "Chemicals and Chemical-Based Products"
      },
      "G22F": {
        "Cluster": "Energy (Fossil and Renewable)"
      },
      "G60F": {
        "Cluster": "Energy (Fossil and Renewable)"
      },
      "G64G": {
        "Cluster": "Energy (Fossil and Renewable)"
      },
      "G65D": {
        "Cluster": "Energy (Fossil and Renewable)"
      },
      "H01A": {
        "Cluster": "Energy (Fossil and Renewable)"
      },
      "H01B": {
        "Cluster": "Computer and Electronic Product Manufacturing"
      },
      "H01C": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "H01D": {
        "Cluster": "Agribusiness, Food Processing and Technology"
      },
      "H01F": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "H01G": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "H01H": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "H01J": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "H01K": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "H01L": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "H01M": {
        "Cluster": "Energy (Fossil and Renewable)"
      },
      "H01N": {
        "Cluster": "Energy (Fossil and Renewable)"
      },
      "H01P": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "H01Q": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "H01R": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "H01S": {
        "Cluster": "Generic Manufacturing"
      },
      "H01T": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "H01V": {
        "Cluster": "Mining"
      },
      "H02B": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "H02G": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "H02H": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "H02J": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "H02K": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "H02M": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "H02N": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "H02P": {
        "Cluster": "Machinery Manufacturing"
      },
      "H02Q": {
        "Cluster": "Energy (Fossil and Renewable)"
      },
      "H02R": {
        "Cluster": "Energy (Fossil and Renewable)"
      },
      "H02S": {
        "Cluster": "Energy (Fossil and Renewable)"
      },
      "H03B": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "H03C": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "H03D": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "H03F": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "H03G": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "H03H": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "H03K": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "H03L": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "H03M": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "H04B": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "H04C": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "H04G": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "H04H": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "H04I": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "H04J": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "H04K": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "H04L": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "H04M": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "H04N": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "H04Q": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "H04R": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "H04W": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "H05B": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "H05F": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "H05G": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "H05H": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "H05K": {
        "Cluster": "Electrical Equip, Appliance and Component Manufacturing"
      },
      "H05V": {
        "Cluster": "Information Technology and Telecommunications"
      },
      "H06F": {
        "Cluster": "Unknown"
      },
      "H07K": {
        "Cluster": "Unknown"
      },
      "H07M": {
        "Cluster": "Unknown"
      },
      "H08H": {
        "Cluster": "Unknown"
      },
      "H09M": {
        "Cluster": "Unknown"
      },
      "H10J": {
        "Cluster": "Unknown"
      },
      "H10L": {
        "Cluster": "Unknown"
      },
      "H20K": {
        "Cluster": "Unknown"
      },
      "H43D": {
        "Cluster": "Unknown"
      },
      "H47G": {
        "Cluster": "Unknown"
      },
      "H47J": {
        "Cluster": "Unknown"
      },
      "H61K": {
        "Cluster": "Unknown"
      },
      "H63H": {
        "Cluster": "Unknown"
      },
      "HO5B": {
        "Cluster": "Unknown"
      },
      "L02F": {
        "Cluster": "Unknown"
      },
      "L04C": {
        "Cluster": "Unknown"
      },
      "P23P": {
        "Cluster": "Unknown"
      },
      "P23Q": {
        "Cluster": "Unknown"
      },
      "Q06Q": {
        "Cluster": "Unknown"
      },
      "R02D": {
        "Cluster": "Unknown"
      }
    };

  myConnector.getSchema = function (schemaCallback) {
    var patentCols = [
      {
        id: "inventor_id",
        alias: "inventor_id",
        hidden: true,
        dataType: tableau.dataTypeEnum.string
      },
      {
        id: "patent_id",
        alias: "patent_id",
        dataType: tableau.dataTypeEnum.string
      },
      {
        id: "patent_title",
        alias: "patent_title",
        dataType: tableau.dataTypeEnum.string
      },
      {
        id: "patent_abstract",
        alias: "patent_abstract",
        dataType: tableau.dataTypeEnum.string
      },
      {
        id: "patent_date",
        alias: "patent_date",
        dataType: tableau.dataTypeEnum.date
      },
      {
        id: "patent_type",
        alias: "patent_type",
        dataType: tableau.dataTypeEnum.string
      }
    ],
      inventorCols = [
        {
          id: "inventor_id",
          alias: "inventor_id",
          dataType: tableau.dataTypeEnum.string
        },
        {
          id: "inventor_last_name",
          alias: "inventor_last_name",
          dataType: tableau.dataTypeEnum.string
        },
        {
          id: "inventor_first_name",
          alias: "inventor_first_name",
          dataType: tableau.dataTypeEnum.string
        },
        {
          id: "inventor_lastknown_city",
          alias: "inventor_lastknown_city",
          dataType: tableau.dataTypeEnum.string
        },
        {
          id: "inventor_lastknown_state",
          alias: "inventor_lastknown_state",
          dataType: tableau.dataTypeEnum.string
        },
        {
          id: "inventor_lastknown_country",
          alias: "inventor_lastknown_country",
          dataType: tableau.dataTypeEnum.string
        },
        {
          id: "inventor_lastknown_longitude",
          alias: "inventor_lastknown_longitude",
          columnRole: "dimension",
          dataType: tableau.dataTypeEnum.float
        },
        {
          id: "inventor_lastknown_latitude",
          alias: "inventor_lastknown_latitude",
          columnRole: "dimension",
          dataType: tableau.dataTypeEnum.float
        },
        {
          id: "inventor_total_num_patents",
          alias: "inventor_total_num_patents",
          dataType: tableau.dataTypeEnum.int
        },
        {
          id: "inventor_first_seen_date",
          alias: "inventor_first_seen_date",
          dataType: tableau.dataTypeEnum.date
        },
        {
          id: "inventor_last_seen_date",
          alias: "inventor_last_seen_date",
          dataType: tableau.dataTypeEnum.date
        }
      ],
      assigneeCols = [
        {
          id: "inventor_id",
          alias: "inventor_id",
          hidden: true,
          dataType: tableau.dataTypeEnum.string
        },
        {
          id: "assignee_id",
          alias: "assignee_id",
          dataType: tableau.dataTypeEnum.string
        },
        {
          id: "assignee_first_name",
          alias: "assignee_first_name",
          dataType: tableau.dataTypeEnum.string
        },
        {
          id: "assignee_last_name",
          alias: "assignee_last_name",
          dataType: tableau.dataTypeEnum.string
        },
        {
          id: "assignee_organization",
          alias: "assignee_organization",
          dataType: tableau.dataTypeEnum.string
        },
        {
          id: "assignee_lastknown_longitude",
          alias: "assignee_lastknown_longitude",
          columnRole: "dimension",
          dataType: tableau.dataTypeEnum.float
        },
        {
          id: "assignee_lastknown_latitude",
          alias: "assignee_lastknown_latitude",
          columnRole: "dimension",
          dataType: tableau.dataTypeEnum.float
        },
        {
          id: "assignee_lastknown_city",
          alias: "assignee_lastknown_city",
          columnRole: "dimension",
          dataType: tableau.dataTypeEnum.string
        },
        {
          id: "assignee_lastknown_state",
          alias: "assignee_lastknown_state",
          columnRole: "dimension",
          dataType: tableau.dataTypeEnum.string
        }
      ],
      wipoCols = [
        {
          id: "inventor_id",
          alias: "inventor_id",
          hidden: true,
          dataType: tableau.dataTypeEnum.string
        },
        {
          id: "wipo_sector_title",
          alias: "wipo_sector_title",
          dataType: tableau.dataTypeEnum.string
        }
      ],
      uspcCols = [
        {
          id: "inventor_id",
          alias: "inventor_id",
          hidden: true,
          dataType: tableau.dataTypeEnum.string
        },
        {
          id: "uspc_mainclass_title",
          alias: "uspc_mainclass_title",
          dataType: tableau.dataTypeEnum.string
        }
      ],
      nberCols = [
        {
          id: "inventor_id",
          alias: "inventor_id",
          hidden: true,
          dataType: tableau.dataTypeEnum.string
        },
        {
          id: "nber_category_title",
          alias: "nber_category_title",
          dataType: tableau.dataTypeEnum.string
        }
      ],
      cpcCols = [
        {
          id: "inventor_id",
          alias: "inventor_id",
          hidden: true,
          dataType: tableau.dataTypeEnum.string
        },
        {
          id: "cpc_group_title",
          alias: "cpc_group_title",
          dataType: tableau.dataTypeEnum.string
        }
      ],
      ipcCols = [
        {
          id: "inventor_id",
          alias: "inventor_id",
          hidden: true,
          dataType: tableau.dataTypeEnum.string
        },
        {
          id: "cluster_by_ipc",
          alias: "cluster_by_ipc",
          dataType: tableau.dataTypeEnum.string
        },
        {
          id: "ipc_class",
          alias: "ipc_class",
          dataType: tableau.dataTypeEnum.string
        },
        {
          id: "ipc_section",
          alias: "ipc_section",
          dataType: tableau.dataTypeEnum.string
        }
      ],
      locationCols = [
        {
          id: "inventor_id",
          alias: "inventor_id",
          hidden: true,
          dataType: tableau.dataTypeEnum.string
        },
        {
          id: "location_county_fips",
          alias: "location_county_fips",
          dataType: tableau.dataTypeEnum.string
        }
      ],

      inventorTableInfo = {
        id: "inventorData",
        alias: "US Inventors Data",
        columns: inventorCols
      },
      locationTableInfo = {
        id: "locationData",
        alias: "US Location Data",
        columns: locationCols
      },
      patentTableInfo = {
        id: "patentData",
        alias: "US Patent Data",
        columns: patentCols
      },
      assigneeTableInfo = {
        id: "assigneeData",
        alias: "US Asignee Data",
        columns: assigneeCols
      },
      wipoTableInfo = {
        id: "wipoData",
        alias: "US Wipo Data",
        columns: wipoCols
      },
      uspcTableInfo = {
        id: "uspcData",
        alias: "US Uspc Data",
        columns: uspcCols
      },
      nberTableInfo = {
        id: "nberData",
        alias: "US nber Data",
        columns: nberCols
      },
      cpcTableInfo = {
        id: "cpcData",
        alias: "US cpc Data",
        columns: cpcCols
      },
      ipcTableInfo = {
        id: "ipcData",
        alias: "US ipc Data",
        columns: ipcCols
      };



    schemaCallback([patentTableInfo, inventorTableInfo, assigneeTableInfo, wipoTableInfo, uspcTableInfo, nberTableInfo, cpcTableInfo, ipcTableInfo, locationTableInfo]);
  };

  myConnector.getData = function (table, doneCallback) {

    var queryObj = JSON.parse(tableau.connectionData),
      filter = queryObj.customFilter || '"' + queryObj.filterKey + '":"' + queryObj.filterValue + '"',
      finalURL = 'https://www.patentsview.org/api/inventors/query?q={' + filter + '}&o={"page":' + queryObj.page + ',"per_page":' + queryObj.per_page + '}&f=' + queryObj.f + '&s=[{"' + queryObj.sortKey + '":"' + queryObj.sortValue + '"}]';
    $.getJSON(finalURL, function (resp) {

      var inventors = resp.inventors,
        tableData = [],
        ipcCode,
        subTable = function (subTableValues, inventors) {
          try {
            inventors[subTableValues].forEach(function (values) {
              var value = values;
              value.inventor_id = inventors.inventor_id;
              tableData.push(value);
            });
          } catch (err) {
            tableau.log(err);
          }
        };


      inventors.forEach(function (inventors) {
        if (table.tableInfo.id === "inventorData") {
          tableData.push(inventors);
        }
        if (table.tableInfo.id === "patentData") {
          subTable("patents", inventors);
        }
        if (table.tableInfo.id === "assigneeData") {
          subTable("assignees", inventors);
        }
        if (table.tableInfo.id === "locationData") {
          subTable("locations", inventors);
        }
        if (table.tableInfo.id === "wipoData") {
          subTable("wipos", inventors);
        }
        if (table.tableInfo.id === "uspcData") {
          subTable("uspcs", inventors);
        }
        if (table.tableInfo.id === "nberData") {
          subTable("nbers", inventors);
        }
        if (table.tableInfo.id === "cpcData") {
          subTable("cpcs", inventors);
        }
        if (table.tableInfo.id === "ipcData") {
          inventors.IPCs.forEach(function (IPCs) {
            if (IPCs.ipc_section) {
              ipcCode = IPCs.ipc_section + IPCs.ipc_class + IPCs.ipc_subclass.toUpperCase();
              tableData.push({
                "inventor_id": inventors.inventor_id,
                "cluster_by_ipc": clusterLookup[ipcCode] ? clusterLookup[ipcCode].Cluster : "Unknown",
              });
            }
          });
        }
      });

      table.appendRows(tableData);
      doneCallback();
    });
  };

  tableau.registerConnector(myConnector);


  $(document).ready(function () {

    $("#submitButton").click(function () {
      var queryObj = {
        per_page: $('#per-page').val(),
        page: $('#page').val(),
        filterKey: $('#filter-key').val(),
        filterValue: $('#filter-value').val(),
        customFilter: $('#custom-filter').val(),
        sortKey: $('#sort-key').val(),
        sortValue: $('#sort-value').val(),
        f: '["patent_abstract","patent_type","patent_id","patent_date","patent_number","patent_title","assignee_id","assignee_lastknown_latitude","assignee_lastknown_longitude","assignee_lastknown_city","assignee_lastknown_state","assignee_last_name","assignee_first_name","assignee_organization","inventor_id","inventor_last_name","inventor_first_name","inventor_lastknown_city","inventor_lastknown_state","inventor_lastknown_country","inventor_lastknown_latitude","inventor_lastknown_longitude","inventor_total_num_patents","inventor_first_seen_date","inventor_last_seen_date","wipo_sector_title","nber_category_title","uspc_mainclass_title","cpc_group_title","ipc_section","ipc_class","ipc_subclass","location_county_fips"]'
      },
        filter = queryObj.customFilter || '"' + queryObj.filterKey + '":"' + queryObj.filterValue + '"',
        finalURL = 'https://www.patentsview.org/api/inventors/query?q={' + filter + '}&o={"page":' + queryObj.page + ',"per_page":' + queryObj.per_page + '}&f=' + queryObj.f + '&s=[{"' + queryObj.sortKey + '":"' + queryObj.sortValue + '"}]';
      $("#output").attr("href", finalURL).append("Test Link");

      tableau.connectionData = JSON.stringify(queryObj);
      tableau.connectionName = "Inventor Feed";
      alert(tableau.connectionData);
      tableau.submit();
    });
  });
}());
