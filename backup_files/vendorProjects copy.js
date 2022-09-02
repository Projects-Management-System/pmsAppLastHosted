const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    Project_ID:String,
    Implementation_By:String,
    Project:String,
    Scope:String,
    HO_Date:String,
    Site_ID:String,
    Site_Name:String,
    New_RAT:String,
    Site_Engineer:String,
    Sub_Contractor:String,
    Site_Status:String,
    Responsible:String,
    Civil_PAT_date:String,
    SAQ_Clearance_Date:String,
    Approval_Received:String,
    MCW_Requested:String,
    MCW_Completed:String,
    Mobilization_Status:String,
    Mobilized_Date:String,
    Installation_Status
    Installation_Date
    Power_Connected_Date
    TX_Connected_Date
    Commissioning_Status
    Commisioned_Date
    SAR_Status
    SAR_Date
    PAT_Status
    PAT_Pass_Date
    Check_List_Submitted
    Check_List_Verified
    On_Air_Status
    On_Air_Date
    PR_Submitted_for_TSS
    PR_Raised_for_TSS
    TSS_PO_number
    PO_Issued_for_TSS
    TSS_HO
    TSSR_Submitted
    TSSR_Approved
    BOQ_Submitted
    Imp_HO
    PR_Submission_for_Imp
    PR_Number_for_Imp
    PR_Raised_for_Imp
    PO_Issued_for_Imp
    PR_Sub_for_supply
    PR_Number_for_supply
    PR_Raised_for_supply
    PO_Issued_for_supply
    PI_Submitted
    PI_Number
    PI_Approved
    TRC_Completed
    BOI_Completed
    ICL_Completed
    LC_Issued
    Shipped
    Received_at_port
    Delivered_to_WH
    Reconciled
    COW_Submitted
    COW_Approved
    Supply_HW_PAC_Submitted
    Supply_HW_PAC_Approved
    Imp_PAC_Submitted
    Imp_PAC_Approved
    Supply_SW_PAC_Submitted
    Supply_SW_PAC_Approved
    Capitalization_Supply_HW
    Capitalization_Imp
    Capitalization_Supply_SW
});

module.exports = mongoose.model('VendorProject',dataSchema);