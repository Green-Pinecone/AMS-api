/*
  Warnings:

  - You are about to drop the `Employee` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropTable
DROP TABLE [dbo].[Employee];

-- CreateTable
CREATE TABLE [dbo].[MasterEmployee] (
    [first_name] NVARCHAR(1000) NOT NULL,
    [last_name] NVARCHAR(1000) NOT NULL,
    [emp_id] INT NOT NULL IDENTITY(1,1),
    [dob] DATETIME2 NOT NULL,
    [gender] NVARCHAR(1000) NOT NULL,
    [personal_email] NVARCHAR(1000) NOT NULL,
    [work_email] NVARCHAR(1000) NOT NULL,
    [contact_no] NVARCHAR(1000) NOT NULL,
    [address] NVARCHAR(1000) NOT NULL,
    [hire_date] DATETIME2 NOT NULL,
    [employment_status] NVARCHAR(1000) NOT NULL,
    [employment_type] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Employee_pkey] PRIMARY KEY CLUSTERED ([emp_id])
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
