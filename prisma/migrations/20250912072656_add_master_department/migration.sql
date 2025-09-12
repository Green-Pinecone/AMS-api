BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Employee] ALTER COLUMN [first_name] NVARCHAR(1000) NOT NULL;
ALTER TABLE [dbo].[Employee] ALTER COLUMN [last_name] NVARCHAR(1000) NOT NULL;
ALTER TABLE [dbo].[Employee] ALTER COLUMN [gender] NVARCHAR(1000) NOT NULL;
ALTER TABLE [dbo].[Employee] ALTER COLUMN [personal_email] NVARCHAR(1000) NOT NULL;
ALTER TABLE [dbo].[Employee] ALTER COLUMN [work_email] NVARCHAR(1000) NOT NULL;
ALTER TABLE [dbo].[Employee] ALTER COLUMN [contact_no] NVARCHAR(1000) NOT NULL;
ALTER TABLE [dbo].[Employee] ALTER COLUMN [address] NVARCHAR(1000) NOT NULL;
ALTER TABLE [dbo].[Employee] ALTER COLUMN [employment_status] NVARCHAR(1000) NOT NULL;
ALTER TABLE [dbo].[Employee] ALTER COLUMN [employment_type] NVARCHAR(1000) NOT NULL;
ALTER TABLE [dbo].[Employee] ADD CONSTRAINT Employee_pkey PRIMARY KEY CLUSTERED ([emp_id]);

-- CreateTable
CREATE TABLE [dbo].[MasterDepartment] (
    [dept_id] INT NOT NULL IDENTITY(1,1),
    [head_emp_id] NVARCHAR(1000) NOT NULL,
    [dept_name] NVARCHAR(1000) NOT NULL,
    [location] NVARCHAR(1000) NOT NULL,
    [budget] FLOAT(53) NOT NULL,
    CONSTRAINT [MasterDepartment_pkey] PRIMARY KEY CLUSTERED ([dept_id]),
    CONSTRAINT [MasterDepartment_dept_name_key] UNIQUE NONCLUSTERED ([dept_name])
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
