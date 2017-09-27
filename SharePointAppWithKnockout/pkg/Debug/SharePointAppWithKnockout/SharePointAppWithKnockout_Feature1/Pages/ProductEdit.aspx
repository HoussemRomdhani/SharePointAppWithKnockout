<%-- The following 4 lines are ASP.NET directives needed when using SharePoint components --%>

<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" %>

<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%-- The markup and script in the following Content element will be placed in the <head> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <script type="text/javascript" src="../Scripts/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="../Scripts/knockout-3.1.0.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.js"></script>
    <script type="text/javascript" src="../Scripts/repositories.js"></script>
    <script type="text/javascript" src="../Scripts/utils.js"></script>
    <meta name="WebPartPageExpansion" content="full" />

    <!-- Office UI Fabric -->
    <link rel="stylesheet" href="//appsforoffice.microsoft.com/fabric/2.2.0/fabric.min.css" />
    <link rel="stylesheet" href="//appsforoffice.microsoft.com/fabric/2.2.0/fabric.components.min.css" />

    <!-- Add your CSS styles to the following file -->
    <link rel="Stylesheet" type="text/css" href="../Content/App.css" />

    <!-- Add your JavaScript to the following file -->
    <script type="text/javascript" src="../Scripts/ProductEdit.js"></script>
</asp:Content>

<%-- The markup in the following Content element will be placed in the TitleArea of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
    Edit Product
</asp:Content>

<%-- The markup and script in the following Content element will be placed in the <body> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">

    <div>
        <div id="productContainer" style="display:none">
            <table class="ms-font-l ms-bgColor-themeLighter" cellspacing="0" cellpadding="15">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>
                            <input data-bind="value: Title" />
                        </td>
                    </tr>
                    <tr>
                        <td>Category</td>
                        <td>
                            <span data-bind="text: CategoryTitle" />
                        </td>
                    </tr>
                    <tr>
                        <td>Quantity Per Unit</td>
                        <td>
                            <input data-bind="value: QuantityPerUnit" />
                        </td>
                    </tr>
                    <tr>
                        <td>Unit Price</td>
                        <td>
                            <input data-bind="value: UnitPrice" />
                        </td>
                    </tr>
                    <tr>
                        <td>Units in Stock</td>
                        <td>
                            <input data-bind="value: UnitsInStock" />
                        </td>
                    </tr>
                    <tr>
                        <td>Units on Order</td>
                        <td>
                            <input data-bind="value: UnitsOnOrder" />
                        </td>
                    </tr>
                    <tr>
                        <td>Reorder Level</td>
                        <td>
                            <input data-bind="value: ReorderLevel" />
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" align="right">
                            <button type="button" class="ms-Button" data-bind="click: saveProduct">
                                <span class="ms-Button-label">Save</span>
                            </button>
                            <button type="button" class="ms-Button" data-bind="click: cancel">
                                <span class="ms-Button-label">Cancel</span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>


</asp:Content>
