BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Employee] (
    [first_name] varchar(255) NOT NULL,
    [last_name] varchar(255) NOT NULL,
    [emp_id] int NOT NULL IDENTITY,
    [dob] datetime2(7) NOT NULL,
    [gender] varchar(255) NOT NULL,
    [personal_email] varchar(255) NOT NULL,
    [work_email] varchar(255) NOT NULL,
    [contact_no] varchar(255) NOT NULL,
    [address] varchar(255) NOT NULL,
    [hire_date] datetime2(7) NOT NULL,
    [employment_status] varchar(255) NOT NULL,
    [employment_type] varchar(255) NOT NULL
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
